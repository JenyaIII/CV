import { Component, useMemo, useRef, useState, type ReactNode } from 'react'
import { PerformanceMonitor, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Group, Points } from 'three'
import { useReducedMotion } from '../hooks/useReducedMotion'

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

function ParticleCloud({
  count,
  reducedMotion,
}: {
  count: number
  reducedMotion: boolean
}) {
  const points = useRef<Points>(null)
  const group = useRef<Group>(null)

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const radius = 1.8 + seededValue(index * 3 + count) * 4.8
      const theta = seededValue(index * 3 + count + 1) * Math.PI * 2
      const phi = Math.acos(2 * seededValue(index * 3 + count + 2) - 1)
      data[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      data[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      data[index * 3 + 2] = radius * Math.cos(phi)
    }
    return data
  }, [count])

  useFrame((state, delta) => {
    if (reducedMotion || !group.current || !points.current) return

    const smoothing = 1 - Math.pow(0.001, delta)
    group.current.rotation.y += delta * 0.035
    group.current.rotation.x +=
      (state.pointer.y * 0.12 - group.current.rotation.x) * smoothing
    points.current.rotation.z +=
      (state.pointer.x * 0.08 - points.current.rotation.z) * smoothing
  })

  return (
    <group ref={group} rotation={[0.15, -0.25, 0]}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#9c83ff"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.78}
          depthWrite={false}
        />
      </points>
      <Sparkles
        count={Math.round(count * 0.12)}
        scale={[8, 7, 5]}
        size={1.8}
        speed={reducedMotion ? 0 : 0.18}
        opacity={0.55}
        color="#eb7cff"
      />
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
  const count = Math.round((mobile ? 850 : 1900) * quality)

  if (reducedMotion) {
    return <StaticSignal />
  }

  return (
    <SceneBoundary fallback={<StaticSignal />}>
      <div className="signal-canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 48 }}
          dpr={mobile ? [0.75, 1.15] : [1, 1.5]}
          gl={{ alpha: true, antialias: !mobile, powerPreference: 'high-performance' }}
        >
          <PerformanceMonitor
            flipflops={3}
            onDecline={() => setQuality(0.6)}
            onIncline={() => setQuality(1)}
          />
          <fog attach="fog" args={['#080812', 4.5, 11]} />
          <ParticleCloud count={count} reducedMotion={reducedMotion} />
        </Canvas>
      </div>
    </SceneBoundary>
  )
}
