import { lazy, Suspense } from 'react'
import { useLocale } from '../i18n/useLocale'
import { ArrowIcon } from './ArrowIcon'

const SignalScene = lazy(() =>
  import('./SignalScene').then((module) => ({ default: module.SignalScene })),
)

export function Hero() {
  const { copy } = useLocale()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <Suspense fallback={<div className="signal-fallback" aria-hidden="true" />}>
        <SignalScene />
      </Suspense>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-content page-shell">
        <p className="eyebrow hero-eyebrow">{copy.hero.eyebrow}</p>
        <h1 id="hero-title">
          <span>{copy.hero.titleLead}</span>
          <em>{copy.hero.titleAccent}</em>
        </h1>
        <div className="hero-lower">
          <p className="hero-body">{copy.hero.body}</p>
          <div className="hero-cta-wrap">
            <a className="primary-cta" href="#contact">
              <span>{copy.common.discuss}</span>
              <ArrowIcon diagonal />
            </a>
            <span className="availability">
              <i aria-hidden="true" />
              {copy.hero.availability}
            </span>
          </div>
        </div>
        <a className="scroll-cue" href="#expertise">
          <span>{copy.hero.scroll}</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
