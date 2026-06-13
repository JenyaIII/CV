import type { SiteCopy } from './types'

export const en: SiteCopy = {
  meta: {
    title: 'Evgeny Zabolotniy — Senior Mobile Developer',
    description:
      'Senior Mobile Developer with 6+ years of experience. React Native, Expo, Flutter, and production apps for iOS and Android.',
  },
  nav: [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  common: {
    menu: 'Menu',
    close: 'Close',
    downloadCv: 'Download CV',
    discuss: 'Discuss a collaboration',
    email: 'Send an email',
    telegram: 'Open Telegram',
    currentLanguage: 'Current language',
  },
  hero: {
    eyebrow: 'Senior Mobile Developer / React Native / Flutter',
    titleLead: 'Turning complex mobile logic',
    titleAccent: 'into a coherent product.',
    body:
      'I design and evolve production apps for iOS and Android: from architecture and advanced UI to native integrations, OTA updates, and store releases.',
    availability: 'Open to product and collaboration conversations',
    scroll: 'Scroll to explore selected work',
  },
  metrics: [
    { value: '6+', label: 'years in commercial mobile development' },
    { value: '4+', label: 'Nordwind rating across the App Store and Google Play' },
    { value: '1000+', label: 'participants supported in conference scenarios' },
    { value: 'iOS + Android', label: 'full production cycle across both platforms' },
  ],
  skills: {
    eyebrow: '01 / Expertise',
    title: 'Engineering around the real user journey.',
    body:
      'I work across product and platform boundaries: building interfaces, connecting data, integrating native capabilities, and shipping changes to users.',
    groups: [
      {
        index: '01',
        title: 'Mobile core',
        items: ['React Native', 'Expo', 'Flutter', 'TypeScript', 'JavaScript'],
      },
      {
        index: '02',
        title: 'Data & state',
        items: ['REST API', 'GraphQL', 'Apollo', 'Redux', 'MobX', 'Zustand', 'Realm'],
      },
      {
        index: '03',
        title: 'UI & motion',
        items: ['Reanimated', 'Lottie', 'advanced UI/UX', 'adaptive interfaces'],
      },
      {
        index: '04',
        title: 'Maps & real-time',
        items: ['Mapbox', 'Yandex Maps SDK', 'Tinode SDK', 'Jitsi', 'WebSocket'],
      },
      {
        index: '05',
        title: 'Delivery',
        items: ['EAS Build', 'Expo Updates', 'OTA Updates', 'App Store', 'Google Play'],
      },
      {
        index: '06',
        title: 'Native & product',
        items: ['Native modules', 'VoIP', 'i18n / Phrase', 'legacy migrations'],
      },
    ],
  },
  work: {
    eyebrow: '02 / Selected work',
    title: 'Products where complexity stays under the hood.',
    body:
      'Four cases spanning travel tech, enterprise communications, maps, and IoT. Each one represents a concrete engineering and product challenge.',
    contributionLabel: 'Contribution',
    resultLabel: 'Outcome',
    featured: [
      {
        slug: 'gobot',
        index: '01',
        title: 'GoBot',
        domain: 'IoT / Sport tech',
        summary:
          'A mobile app for an intelligent training system with ball delivery, illuminated targets, and local device interaction.',
        contributions: [
          'Expo and TypeScript application development',
          'EAS Build, Expo Updates, and OTA releases',
          'QR scanning and character animation with Lottie',
        ],
        result: 'Product changes can ship without requiring a new store release.',
        stack: ['Expo', 'React Native', 'Zustand', 'Reanimated', 'Lottie'],
        image: '/projects/gobot.svg',
        imageAlt: 'Abstract artwork for the GoBot project',
      },
      {
        slug: 'corptime',
        index: '02',
        title: 'CorpTime',
        domain: 'Enterprise communications',
        summary:
          'An enterprise messenger combining chat, calls, video conferencing, tasks, maps, and calendar integrations.',
        contributions: [
          'Tinode chats and Realm-based offline caching',
          'Mapbox routes and point clustering',
          'VoIP native modules and Jitsi conferences',
        ],
        result: 'Conference scenarios support audiences of more than 1,000 participants.',
        stack: ['React Native', 'MobX', 'Tinode', 'Realm', 'Jitsi', 'Mapbox'],
        image: '/projects/corptime.svg',
        imageAlt: 'Abstract artwork for the CorpTime project',
      },
      {
        slug: 'nordwind',
        index: '03',
        title: 'Nordwind Airlines',
        domain: 'Travel tech / Aviation',
        summary:
          'An airline app covering flight check-in, seat selection, loyalty, and social authentication.',
        contributions: [
          'Advanced seat-selection UI and UX',
          'Online check-in and loyalty features',
          'Legacy refactoring and performance work',
        ],
        result:
          'UX, stability, and performance improvements contributed to a 4+ store rating.',
        stack: ['React Native', 'GraphQL', 'Apollo', 'Redux', 'Reanimated'],
        image: '/projects/nordwind.svg',
        imageAlt: 'Abstract artwork for the Nordwind Airlines project',
      },
      {
        slug: 'place-time',
        index: '04',
        title: 'Place Time',
        domain: 'Maps / Social',
        summary:
          'A geo-social product combining maps, feeds, user media, and business locations.',
        contributions: [
          'Mapbox clustering and route building',
          'Feed and media publishing workflows',
          'React Native upgrade and new architecture work',
        ],
        result:
          'The legacy app moved to a current React Native version and toward the new architecture.',
        stack: ['React Native', 'MobX', 'Mapbox', 'Reanimated', 'Lottie'],
        image: '/projects/placetime.svg',
        imageAlt: 'Abstract artwork for the Place Time project',
      },
    ],
    moreTitle: 'More projects',
    more: [
      {
        title: 'GoBot Operator',
        domain: 'Flutter pet project',
        summary: 'A native tablet client controlling the installation over local Wi-Fi.',
        stack: ['Flutter', 'Dart', 'Material 3', 'WebSocket'],
      },
      {
        title: 'WebSky Airlines',
        domain: 'Aviation platform',
        summary: 'A reusable mobile engine powering airline products.',
        stack: ['React Native', 'GraphQL', 'Apollo', 'Redux'],
      },
      {
        title: 'Pooltrackr',
        domain: 'Service operations',
        summary: 'Scheduling flows synchronized with Google Calendar.',
        stack: ['React Native', 'REST API', 'Redux'],
      },
      {
        title: 'MegaSet',
        domain: 'E-commerce',
        summary: 'Marketplace, OTP authentication, store inventory, and Yandex Maps.',
        stack: ['React Native', 'MobX', 'Yandex Maps SDK'],
      },
    ],
  },
  experience: {
    eyebrow: '03 / Experience',
    title: 'From web engineering to the full mobile product cycle.',
    body:
      'My commercial path built a broad technical context across web, cross-platform delivery, platform-specific work, and production operations.',
    items: [
      {
        period: 'July 2021 — present',
        company: 'Krug LLC',
        role: 'Mobile Application Developer',
        summary:
          'Cross-platform products, advanced UI, real-time communication, maps, native modules, release operations, and production evolution.',
      },
      {
        period: 'September 2020 — July 2021',
        company: 'Miura Tech',
        role: 'Mobile Developer',
        summary:
          'React Native development for iOS and Android using GraphQL, REST API, Redux, and Firebase.',
      },
      {
        period: 'September 2019 — September 2020',
        company: 'Exceed Team #1',
        role: 'Web Developer',
        summary:
          'SSR and CSR applications with React, TypeScript, Node.js, PostgreSQL, MongoDB, and GraphQL.',
      },
    ],
    educationLabel: 'Education',
    education:
      'Southern Federal University — Master’s studies in instrumentation and biotechnical systems.',
  },
  contact: {
    eyebrow: '04 / Contact',
    title: 'Have a product challenge? Let’s unpack it together.',
    body:
      'Open to discussing mobile products, advanced interfaces, existing application development, and long-term collaboration.',
    emailLabel: 'Email',
    telegramLabel: 'Telegram',
    location: 'Rostov-on-Don / open to remote work and relocation',
  },
  footer: {
    role: 'Senior Mobile Developer',
    backToTop: 'Back to top',
  },
}
