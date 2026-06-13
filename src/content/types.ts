export type Locale = 'ru' | 'en'

export interface NavItem {
  label: string
  href: string
}

export interface Metric {
  value: string
  label: string
}

export interface SkillGroup {
  index: string
  title: string
  items: string[]
}

export interface FeaturedProject {
  slug: string
  index: string
  title: string
  domain: string
  summary: string
  contributions: string[]
  result?: string
  stack: string[]
  image: string
  imageAlt: string
}

export interface CompactProject {
  title: string
  domain: string
  summary: string
  stack: string[]
}

export interface ExperienceItem {
  period: string
  company: string
  role: string
  summary: string
}

export interface SiteCopy {
  meta: {
    title: string
    description: string
  }
  nav: NavItem[]
  common: {
    menu: string
    close: string
    downloadCv: string
    discuss: string
    email: string
    telegram: string
    currentLanguage: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    body: string
    availability: string
    scroll: string
  }
  metrics: Metric[]
  skills: {
    eyebrow: string
    title: string
    body: string
    groups: SkillGroup[]
  }
  work: {
    eyebrow: string
    title: string
    body: string
    contributionLabel: string
    resultLabel: string
    featured: FeaturedProject[]
    moreTitle: string
    more: CompactProject[]
  }
  experience: {
    eyebrow: string
    title: string
    body: string
    items: ExperienceItem[]
    educationLabel: string
    education: string
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    emailLabel: string
    telegramLabel: string
    location: string
  }
  footer: {
    role: string
    backToTop: string
  }
}
