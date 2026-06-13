import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/useLocale'
import { ArrowIcon } from './ArrowIcon'

export function Header() {
  const { locale, copy, setLocale } = useLocale()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="EVGENY.FIRM — home">
        <span className="brand-mark" aria-hidden="true">
          E
        </span>
        <span>EVGENY.FIRM</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {copy.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div
          className="language-switch"
          aria-label={copy.common.currentLanguage}
        >
          {(['ru', 'en'] as const).map((item) => (
            <button
              key={item}
              type="button"
              className={locale === item ? 'is-active' : ''}
              aria-pressed={locale === item}
              onClick={() => setLocale(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <a
          className="resume-link"
          href="/resume/evgeny-zabolotniy-cv.pdf"
          download
        >
          {copy.common.downloadCv}
          <ArrowIcon diagonal />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span>{open ? copy.common.close : copy.common.menu}</span>
          <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {copy.nav.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-language">
          <span>{copy.common.currentLanguage}</span>
          <div
            className="language-switch"
            aria-label={copy.common.currentLanguage}
          >
            {(['ru', 'en'] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={locale === item ? 'is-active' : ''}
                aria-pressed={locale === item}
                onClick={() => setLocale(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <a
          className="mobile-resume"
          href="/resume/evgeny-zabolotniy-cv.pdf"
          download
          onClick={() => setOpen(false)}
        >
          {copy.common.downloadCv}
          <ArrowIcon diagonal />
        </a>
      </div>
    </header>
  )
}
