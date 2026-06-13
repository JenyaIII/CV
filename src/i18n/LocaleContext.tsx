import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { content, type Locale } from '../content'
import { LocaleContext } from './locale-context'

const STORAGE_KEY = 'evgeny-portfolio-locale'

function getInitialLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'en' ? 'en' : 'ru'
  } catch {
    return 'ru'
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      // The current session still switches language when storage is unavailable.
    }
  }, [])

  useEffect(() => {
    const copy = content[locale]
    document.documentElement.lang = locale
    document.title = copy.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.meta.description)
  }, [locale])

  const value = useMemo(
    () => ({ locale, copy: content[locale], setLocale }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
