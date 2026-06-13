import { useLocale } from '../i18n/useLocale'
import { ArrowIcon } from './ArrowIcon'
import { Reveal } from './Reveal'

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

export function MetricsSection() {
  const { copy } = useLocale()

  return (
    <section className="metrics page-shell" aria-label="Key results">
      {copy.metrics.map((metric, index) => (
        <Reveal key={metric.label} className="metric">
          <span className="metric-index">0{index + 1}</span>
          <strong>{metric.value}</strong>
          <p>{metric.label}</p>
        </Reveal>
      ))}
    </section>
  )
}

export function SkillsSection() {
  const { copy } = useLocale()

  return (
    <section id="expertise" className="content-section page-shell">
      <Reveal>
        <SectionHeading
          eyebrow={copy.skills.eyebrow}
          title={copy.skills.title}
          body={copy.skills.body}
        />
      </Reveal>
      <div className="skill-grid">
        {copy.skills.groups.map((group) => (
          <Reveal key={group.index} className="skill-card">
            <div className="skill-card-head">
              <span>{group.index}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ProjectsSection() {
  const { copy } = useLocale()

  return (
    <section id="work" className="content-section projects-section page-shell">
      <Reveal>
        <SectionHeading
          eyebrow={copy.work.eyebrow}
          title={copy.work.title}
          body={copy.work.body}
        />
      </Reveal>

      <div className="featured-projects">
        {copy.work.featured.map((project) => (
          <Reveal key={project.slug}>
            <article className="project-card">
              <div className="project-visual">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <span className="project-number">{project.index}</span>
                <span className="project-domain">{project.domain}</span>
              </div>
              <div className="project-copy">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="project-details">
                  <div>
                    <h4>{copy.work.contributionLabel}</h4>
                    <ul>
                      {project.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  {project.result && (
                    <div>
                      <h4>{copy.work.resultLabel}</h4>
                      <p>{project.result}</p>
                    </div>
                  )}
                </div>
                <ul className="tag-list" aria-label="Technology stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="project-index-wrap">
        <h3 className="project-index-title">{copy.work.moreTitle}</h3>
        <div className="project-index">
          {copy.work.more.map((project, index) => (
            <article key={project.title} className="project-index-row">
              <span className="project-index-number">0{index + 5}</span>
              <div>
                <h4>{project.title}</h4>
                <span>{project.domain}</span>
              </div>
              <p>{project.summary}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export function ExperienceSection() {
  const { copy } = useLocale()

  return (
    <section id="experience" className="content-section experience page-shell">
      <Reveal>
        <SectionHeading
          eyebrow={copy.experience.eyebrow}
          title={copy.experience.title}
          body={copy.experience.body}
        />
      </Reveal>
      <div className="timeline">
        {copy.experience.items.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} className="timeline-item">
            <span className="timeline-number">0{index + 1}</span>
            <p className="timeline-period">{item.period}</p>
            <div className="timeline-role">
              <h3>{item.company}</h3>
              <span>{item.role}</span>
            </div>
            <p className="timeline-summary">{item.summary}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="education">
        <span>{copy.experience.educationLabel}</span>
        <p>{copy.experience.education}</p>
      </Reveal>
    </section>
  )
}

export function ContactSection() {
  const { copy } = useLocale()

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid" aria-hidden="true" />
      <div className="page-shell contact-inner">
        <Reveal>
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p className="contact-body">{copy.contact.body}</p>
        </Reveal>
        <Reveal className="contact-links">
          <a href="mailto:161russ@gmail.com" aria-label={copy.common.email}>
            <span>{copy.contact.emailLabel}</span>
            <strong>161russ@gmail.com</strong>
            <ArrowIcon diagonal />
          </a>
          <a
            href="https://t.me/EvgenyFirm"
            target="_blank"
            rel="noreferrer"
            aria-label={copy.common.telegram}
          >
            <span>{copy.contact.telegramLabel}</span>
            <strong>@EvgenyFirm</strong>
            <ArrowIcon diagonal />
          </a>
        </Reveal>
        <p className="location">{copy.contact.location}</p>
      </div>
    </section>
  )
}

export function Footer() {
  const { copy } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer page-shell">
      <div>
        <strong>EVGENY.FIRM</strong>
        <span>{copy.footer.role}</span>
      </div>
      <p>© {year} Evgeny Zabolotniy</p>
      <a href="#top">
        {copy.footer.backToTop}
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}
