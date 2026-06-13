import { Header } from './components/Header'
import { Hero } from './components/Hero'
import {
  ContactSection,
  ExperienceSection,
  Footer,
  MetricsSection,
  ProjectsSection,
  SkillsSection,
} from './components/Sections'
import { LocaleProvider } from './i18n/LocaleContext'
import { useLocale } from './i18n/useLocale'

function Portfolio() {
  const { locale } = useLocale()

  return (
    <>
      <a className="skip-link" href="#main">
        {locale === 'ru' ? 'Перейти к содержанию' : 'Skip to content'}
      </a>
      <div className="noise" aria-hidden="true" />
      <Header />
      <main id="main">
        <div id="top" />
        <Hero />
        <MetricsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <Portfolio />
    </LocaleProvider>
  )
}
