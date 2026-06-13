import {
  Component,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { PerformanceMonitor } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  AdditiveBlending,
  Color,
  type BufferAttribute,
  type BufferGeometry,
  type Group,
  type LineBasicMaterial,
  type LineSegments,
  type Mesh,
  type PlaneGeometry,
  type Points,
  type PointsMaterial,
  type ShaderMaterial,
} from 'three'
import { useReducedMotion } from '../hooks/useReducedMotion'

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uPhase;

  void main() {
    vUv = uv;
    vec3 transformed = position;
    transformed.z += sin((position.x + uPhase) * 0.42 + uTime * 0.08) * 0.08;
    transformed.z += cos((position.y - uPhase) * 0.37 - uTime * 0.06) * 0.06;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uPhase;
  uniform float uDensity;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    mat2 rotation = mat2(0.80, 0.60, -0.60, 0.80);

    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p = rotation * p * 2.02 + 13.7;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 centered = vUv - 0.5;
    vec2 flow = vec2(uTime * 0.018, -uTime * 0.012);
    vec2 sampleUv = centered * uDensity + flow + vec2(uPhase, -uPhase * 0.7);

    float base = fbm(sampleUv);
    float detail = fbm(sampleUv * 1.85 - vec2(uTime * 0.011, 0.0));
    float cloud = smoothstep(0.38, 0.82, base * 0.72 + detail * 0.48);
    float filaments = smoothstep(0.50, 0.78, abs(detail - base) + base * 0.54);

    float radial = 1.0 - smoothstep(0.24, 0.76, length(centered * vec2(0.88, 1.18)));
    float rightBias = smoothstep(-0.42, 0.22, centered.x);
    float alpha = cloud * radial * mix(0.35, 1.0, rightBias) * uOpacity;

    vec3 color = mix(uColorA, uColorB, smoothstep(0.25, 0.82, detail));
    color += uColorB * filaments * 0.22;

    gl_FragColor = vec4(color, alpha);
  }
`

function seededValue(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

interface StarTunnelProps {
  count: number
  depth: number
  radius: number
  size: number
  speed: number
  color: string
  opacity: number
  speedRef: React.RefObject<number>
  seed: number
}

function StarTunnel({
  count,
  depth,
  radius,
  size,
  speed,
  color,
  opacity,
  speedRef,
  seed,
}: StarTunnelProps) {
  const points = useRef<Points<BufferGeometry, PointsMaterial>>(null)
  const speeds = useMemo(() => {
    const values = new Float32Array(count)
    for (let index = 0; index < count; index += 1) {
      values[index] = 0.65 + seededValue(seed + index * 5 + 4) * 0.75
    }
    return values
  }, [count, seed])

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const angle = seededValue(seed + index * 5) * Math.PI * 2
      const distance =
        (0.15 + Math.sqrt(seededValue(seed + index * 5 + 1)) * 0.85) *
        radius

      values[index * 3] = Math.cos(angle) * distance
      values[index * 3 + 1] =
        Math.sin(angle) * distance * 0.72 +
        (seededValue(seed + index * 5 + 2) - 0.5) * 0.8
      values[index * 3 + 2] =
        2.5 - seededValue(seed + index * 5 + 3) * depth
    }
    return values
  }, [count, depth, radius, seed])

  useFrame((_, delta) => {
    const positionAttribute = points.current?.geometry.attributes
      .position as BufferAttribute | undefined
    if (!positionAttribute) return

    const values = positionAttribute.array as Float32Array
    const travel = delta * speed * speedRef.current

    for (let index = 0; index < count; index += 1) {
      const zIndex = index * 3 + 2
      values[zIndex] += travel * speeds[index]
      if (values[zIndex] > 4.2) {
        values[zIndex] -= depth
      }
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        fog
        blending={AdditiveBlending}
      />
    </points>
  )
}

function StarStreaks({
  count,
  mobile,
  quality,
  speedRef,
}: {
  count: number
  mobile: boolean
  quality: number
  speedRef: React.RefObject<number>
}) {
  const lines = useRef<LineSegments<BufferGeometry, LineBasicMaterial>>(null)
  const depth = mobile ? 20 : 24
  const streakCount = Math.round(count * quality)
  const streakSpeeds = useMemo(() => {
    const values = new Float32Array(streakCount)
    for (let index = 0; index < streakCount; index += 1) {
      values[index] = 0.7 + seededValue(1703 + index * 7) * 0.7
    }
    return values
  }, [streakCount])

  const positions = useMemo(() => {
    const values = new Float32Array(streakCount * 6)
    for (let index = 0; index < streakCount; index += 1) {
      const angle = seededValue(1201 + index * 7) * Math.PI * 2
      const distance =
        (0.2 + Math.sqrt(seededValue(1202 + index * 7)) * 0.8) *
        (mobile ? 5.2 : 6.8)
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance * 0.72
      const headZ = 2.8 - seededValue(1203 + index * 7) * depth
      const length = 0.45 + seededValue(1204 + index * 7) * 1.5
      const offset = index * 6

      values[offset] = x
      values[offset + 1] = y
      values[offset + 2] = headZ - length
      values[offset + 3] = x
      values[offset + 4] = y
      values[offset + 5] = headZ
    }
    return values
  }, [depth, mobile, streakCount])

  useFrame((_, delta) => {
    const positionAttribute = lines.current?.geometry.attributes
      .position as BufferAttribute | undefined
    if (!positionAttribute) return

    const values = positionAttribute.array as Float32Array
    const travel = delta * (mobile ? 4.5 : 6.4) * speedRef.current

    for (let index = 0; index < streakCount; index += 1) {
      const offset = index * 6
      const movement = travel * streakSpeeds[index]
      values[offset + 2] += movement
      values[offset + 5] += movement
      if (values[offset + 5] > 4.1) {
        values[offset + 2] -= depth
        values[offset + 5] -= depth
      }
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        color="#d9ceff"
        transparent
        opacity={mobile ? 0.24 : 0.38}
        depthWrite={false}
        blending={AdditiveBlending}
        fog
      />
    </lineSegments>
  )
}

interface NebulaPlaneProps {
  position: [number, number, number]
  scale: [number, number]
  speed: number
  colorA: string
  colorB: string
  density: number
  opacity: number
  phase: number
  speedRef: React.RefObject<number>
}

function NebulaPlane({
  position,
  scale,
  speed,
  colorA,
  colorB,
  density,
  opacity,
  phase,
  speedRef,
}: NebulaPlaneProps) {
  const mesh = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPhase: { value: phase },
      uDensity: { value: density },
      uOpacity: { value: opacity },
      uColorA: { value: new Color(colorA) },
      uColorB: { value: new Color(colorB) },
    }),
    [colorA, colorB, density, opacity, phase],
  )

  useFrame((_, delta) => {
    if (!mesh.current) return

    mesh.current.material.uniforms.uTime.value += delta
    mesh.current.position.z += delta * speed * speedRef.current
    if (mesh.current.position.z > 1.2) {
      mesh.current.position.z -= 27
    }
  })

  return (
    <mesh ref={mesh} position={position} scale={[scale[0], scale[1], 1]}>
      <planeGeometry args={[1, 1, 28, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        toneMapped={false}
      />
    </mesh>
  )
}

function FlightRig({
  mobile,
  quality,
}: {
  mobile: boolean
  quality: number
}) {
  const group = useRef<Group>(null)
  const speedRef = useRef(mobile ? 0.72 : 1)

  useFrame((state, delta) => {
    if (!group.current) return

    const pointerDistance = Math.min(
      1,
      Math.hypot(state.pointer.x, state.pointer.y),
    )
    const boost = mobile ? 0.22 : 0.65
    const targetSpeed = (mobile ? 0.72 : 1) + pointerDistance * boost
    const speedEase = 1 - Math.pow(0.002, delta)
    const rigEase = 1 - Math.pow(0.0008, delta)
    const parallax = mobile ? 0.045 : 0.11

    speedRef.current += (targetSpeed - speedRef.current) * speedEase
    group.current.rotation.y +=
      (state.pointer.x * parallax - group.current.rotation.y) * rigEase
    group.current.rotation.x +=
      (-state.pointer.y * parallax * 0.55 - group.current.rotation.x) *
      rigEase
    group.current.position.x +=
      (state.pointer.x * (mobile ? 0.08 : 0.22) - group.current.position.x) *
      rigEase
    group.current.position.y +=
      (state.pointer.y * (mobile ? 0.05 : 0.14) - group.current.position.y) *
      rigEase
  })

  const farCount = Math.round((mobile ? 360 : 720) * quality)
  const middleCount = Math.round((mobile ? 250 : 520) * quality)
  const nearCount = Math.round(280 * quality)

  return (
    <group ref={group}>
      <StarTunnel
        count={farCount}
        depth={34}
        radius={11}
        size={0.022}
        speed={2.1}
        color="#8275c7"
        opacity={0.46}
        speedRef={speedRef}
        seed={101}
      />
      <StarTunnel
        count={middleCount}
        depth={28}
        radius={8.5}
        size={0.045}
        speed={3.6}
        color="#c7b9ff"
        opacity={0.68}
        speedRef={speedRef}
        seed={503}
      />
      {!mobile && (
        <StarTunnel
          count={nearCount}
          depth={22}
          radius={7}
          size={0.075}
          speed={5.2}
          color="#f1eaff"
          opacity={0.82}
          speedRef={speedRef}
          seed={907}
        />
      )}
      <StarStreaks
        count={mobile ? 44 : 110}
        mobile={mobile}
        quality={quality}
        speedRef={speedRef}
      />

      <NebulaPlane
        position={[3.8, 0.4, -8]}
        scale={[15, 10]}
        speed={0.5}
        colorA="#5937c7"
        colorB="#e064ff"
        density={2.45}
        opacity={(mobile ? 0.42 : 0.52) * quality}
        phase={0.18}
        speedRef={speedRef}
      />
      {!mobile && (
        <NebulaPlane
          position={[2.1, -1.2, -19]}
          scale={[18, 12]}
          speed={0.34}
          colorA="#1b8fbc"
          colorB="#9a72ff"
          density={2.9}
          opacity={0.43 * quality}
          phase={2.7}
          speedRef={speedRef}
        />
      )}
    </group>
  )
}

function StaticSignal() {
  return <div className="signal-fallback" aria-hidden="true" />
}

export function SignalScene() {
  const reducedMotion = useReducedMotion()
  const [quality, setQuality] = useState(1)
  const mobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 720px)').matches

  if (reducedMotion) {
    return <StaticSignal />
  }

  return (
    <SceneBoundary fallback={<StaticSignal />}>
      <div className="signal-canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 5], fov: mobile ? 56 : 50 }}
          dpr={mobile ? [0.7, 1] : [1, 1.5]}
          gl={{
            alpha: true,
            antialias: !mobile,
            powerPreference: 'high-performance',
          }}
        >
          <PerformanceMonitor
            flipflops={3}
            onDecline={() => setQuality(0.62)}
            onIncline={() => setQuality(1)}
          />
          <fog attach="fog" args={['#080812', 3.8, 31]} />
          <FlightRig mobile={mobile} quality={quality} />
        </Canvas>
      </div>
    </SceneBoundary>
  )
}
