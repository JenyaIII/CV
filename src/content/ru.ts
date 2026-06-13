import type { SiteCopy } from './types'

export const ru: SiteCopy = {
  meta: {
    title: 'Евгений Заболотний — Senior Mobile Developer',
    description:
      'Senior Mobile Developer с 6+ годами опыта. React Native, Expo, Flutter и production-приложения для iOS и Android.',
  },
  nav: [
    { label: 'Экспертиза', href: '#expertise' },
    { label: 'Проекты', href: '#work' },
    { label: 'Опыт', href: '#experience' },
    { label: 'Контакты', href: '#contact' },
  ],
  common: {
    menu: 'Меню',
    close: 'Закрыть',
    downloadCv: 'Скачать резюме',
    discuss: 'Обсудить сотрудничество',
    email: 'Написать на email',
    telegram: 'Открыть Telegram',
    currentLanguage: 'Текущий язык',
  },
  hero: {
    eyebrow: 'Senior Mobile Developer / React Native / Flutter',
    titleLead: 'Превращаю сложную mobile-логику',
    titleAccent: 'в цельный продукт.',
    body:
      'Проектирую и развиваю production-приложения для iOS и Android: от архитектуры и сложного UI до native-интеграций, OTA-обновлений и публикации в сторах.',
    availability: 'Открыт к диалогу о продукте и сотрудничестве',
    scroll: 'Листайте, чтобы увидеть проекты',
  },
  metrics: [
    { value: '6+', label: 'лет коммерческой mobile-разработки' },
    { value: '4+', label: 'рейтинг Nordwind в App Store и Google Play' },
    { value: '1000+', label: 'участников в сценариях видеоконференций' },
    { value: 'iOS + Android', label: 'полный production-цикл на двух платформах' },
  ],
  skills: {
    eyebrow: '01 / Экспертиза',
    title: 'Инженерия вокруг реального пользовательского сценария.',
    body:
      'Работаю на стыке продукта и платформы: собираю интерфейс, связываю данные, подключаю native-возможности и довожу изменения до пользователей.',
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
        items: ['Reanimated', 'Lottie', 'сложный UI/UX', 'адаптивные интерфейсы'],
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
    eyebrow: '02 / Избранные проекты',
    title: 'Продукты, где сложность остаётся под капотом.',
    body:
      'Четыре кейса из travel tech, корпоративных коммуникаций, геосервисов и IoT. В каждом — конкретные технические и продуктовые задачи.',
    contributionLabel: 'Вклад',
    resultLabel: 'Результат',
    featured: [
      {
        slug: 'gobot',
        index: '01',
        title: 'GoBot',
        domain: 'IoT / Sport tech',
        summary:
          'Мобильное приложение для интеллектуального игрового комплекса с подачей мячей, световыми мишенями и локальным взаимодействием с установкой.',
        contributions: [
          'Разработка приложения на Expo и TypeScript',
          'EAS Build, Expo Updates и OTA-релизы',
          'QR-сканер и персонажная Lottie-анимация',
        ],
        result:
          'Изменения доставляются без обязательной публикации новой версии в сторах.',
        stack: ['Expo', 'React Native', 'Zustand', 'Reanimated', 'Lottie'],
        image: '/projects/gobot.svg',
        imageAlt: 'Абстрактная обложка проекта GoBot',
      },
      {
        slug: 'corptime',
        index: '02',
        title: 'CorpTime',
        domain: 'Enterprise communications',
        summary:
          'Корпоративный мессенджер с чатами, звонками, видеоконференциями, задачами, картами и интеграциями календарей.',
        contributions: [
          'Tinode-чаты и кеширование данных через Realm',
          'Mapbox, маршруты и кластеризация точек',
          'VoIP native-модули и Jitsi-конференции',
        ],
        result:
          'Поддержаны сценарии видеовстреч с аудиторией более 1000 участников.',
        stack: ['React Native', 'MobX', 'Tinode', 'Realm', 'Jitsi', 'Mapbox'],
        image: '/projects/corptime.svg',
        imageAlt: 'Абстрактная обложка проекта CorpTime',
      },
      {
        slug: 'nordwind',
        index: '03',
        title: 'Nordwind Airlines',
        domain: 'Travel tech / Aviation',
        summary:
          'Мобильное приложение авиакомпании: регистрация на рейс, выбор места, программа лояльности и социальная авторизация.',
        contributions: [
          'Сложный UI/UX схемы выбора места',
          'Online check-in и программа лояльности',
          'Рефакторинг legacy-кода и оптимизация',
        ],
        result:
          'Улучшение UX, стабильности и производительности помогло поднять рейтинг до 4+.',
        stack: ['React Native', 'GraphQL', 'Apollo', 'Redux', 'Reanimated'],
        image: '/projects/nordwind.svg',
        imageAlt: 'Абстрактная обложка проекта Nordwind Airlines',
      },
      {
        slug: 'place-time',
        index: '04',
        title: 'Place Time',
        domain: 'Maps / Social',
        summary:
          'Геосоциальное приложение с картой, лентой, пользовательским контентом и бизнес-локациями.',
        contributions: [
          'Mapbox-кластеризация и построение маршрутов',
          'Лента и публикация постов с медиа',
          'Обновление React Native и новая архитектура',
        ],
        result:
          'Legacy-приложение переведено на актуальную версию React Native и подготовлено к новой архитектуре.',
        stack: ['React Native', 'MobX', 'Mapbox', 'Reanimated', 'Lottie'],
        image: '/projects/placetime.svg',
        imageAlt: 'Абстрактная обложка проекта Place Time',
      },
    ],
    moreTitle: 'Другие проекты',
    more: [
      {
        title: 'GoBot Operator',
        domain: 'Flutter pet project',
        summary: 'Планшетный native-клиент для управления установкой по локальному Wi-Fi.',
        stack: ['Flutter', 'Dart', 'Material 3', 'WebSocket'],
      },
      {
        title: 'WebSky Airlines',
        domain: 'Aviation platform',
        summary: 'Переиспользуемый мобильный движок для airline-продуктов.',
        stack: ['React Native', 'GraphQL', 'Apollo', 'Redux'],
      },
      {
        title: 'Pooltrackr',
        domain: 'Service operations',
        summary: 'Расписания и синхронизация операционных сценариев с Google Calendar.',
        stack: ['React Native', 'REST API', 'Redux'],
      },
      {
        title: 'МегаСеть',
        domain: 'E-commerce',
        summary: 'Marketplace, OTP-авторизация, наличие по магазинам и Yandex Maps.',
        stack: ['React Native', 'MobX', 'Yandex Maps SDK'],
      },
    ],
  },
  experience: {
    eyebrow: '03 / Опыт',
    title: 'От web-разработки к полному циклу mobile-продукта.',
    body:
      'Коммерческий путь сформировал широкий технический контекст: web, кроссплатформенная разработка, platform-specific задачи и сопровождение production.',
    items: [
      {
        period: 'Июль 2021 — настоящее время',
        company: 'ООО «Круг»',
        role: 'Разработчик мобильных приложений',
        summary:
          'Кроссплатформенные mobile-продукты, сложный UI, real-time, карты, native-модули, релизный цикл и развитие production-приложений.',
      },
      {
        period: 'Сентябрь 2020 — июль 2021',
        company: 'Miura Tech',
        role: 'Mobile Developer',
        summary:
          'Разработка iOS- и Android-приложений на React Native с GraphQL, REST API, Redux и Firebase.',
      },
      {
        period: 'Сентябрь 2019 — сентябрь 2020',
        company: 'Exceed Team #1',
        role: 'Web Developer',
        summary:
          'SSR- и CSR-приложения на React, TypeScript и Node.js с PostgreSQL, MongoDB и GraphQL.',
      },
    ],
    educationLabel: 'Образование',
    education:
      'Южный федеральный университет — магистратура, приборостроение и биотехнические системы.',
  },
  contact: {
    eyebrow: '04 / Контакт',
    title: 'Есть продуктовая задача? Давайте разберём её вместе.',
    body:
      'Открыт к обсуждению mobile-продуктов, сложных интерфейсов, развития существующих приложений и долгосрочного сотрудничества.',
    emailLabel: 'Email',
    telegramLabel: 'Telegram',
    location: 'Ростов-на-Дону / готов к удалённой работе и переезду',
  },
  footer: {
    role: 'Senior Mobile Developer',
    backToTop: 'Наверх',
  },
}
