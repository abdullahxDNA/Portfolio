import { useState, useEffect } from 'react'
import { CONTACT, ROLES, PITCH, SKILLS, PROJECTS, CERTS, ACHIEVEMENTS, EDUCATION } from './data'

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
      return
    }
    const t = setTimeout(
      () => setSubIndex(s => s + (deleting ? -1 : 1)),
      deleting ? 40 : 80
    )
    return () => clearTimeout(t)
  }, [subIndex, index, deleting, words])

  return words[index].substring(0, subIndex)
}

function Avatar() {
  const [hasPhoto, setHasPhoto] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = '/photo.jpg'
    img.onerror = () => setHasPhoto(false)
  }, [])

  return (
    <div className="hero__avatar">
      {hasPhoto ? (
        <div className="hero__avatar-img" role="img" aria-label={CONTACT.name} />
      ) : (
        <div className="hero__avatar-fallback">MA</div>
      )}
    </div>
  )
}

function Nav() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav className="nav">
      <a className="nav__brand" href="#top">MD Abdullah</a>
      <div className="nav__links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav__icons">
        <button className="nav__icon nav__theme-btn" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
          {dark ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <a className="nav__icon" href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a className="nav__icon" href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  const role = useTypewriter(ROLES)
  return (
    <header id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__glow2" />
      <div className="wrap hero__inner">
        <div className="hero__text">
          <div className="hero__badges">
            <span className="hero__eyebrow">📍 {CONTACT.location}</span>
            <span className="hero__eyebrow hero__eyebrow--green">🟢 Open to Work</span>
          </div>
          <h1 className="hero__greeting">
            Hi, I'm <span className="hero__name">{CONTACT.name}</span>
          </h1>
          <p className="hero__role">
            And I am a&nbsp;
            <span className="hero__typed">{role}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>
          <p className="hero__pitch">{PITCH}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">View Projects</a>
            <a className="btn btn--cv" href="/MD_Abdullah_CV.pdf" download="MD_Abdullah_CV.pdf">↓ Download CV</a>
            <a className="btn" href={`mailto:${CONTACT.email}`}>Get in Touch</a>
          </div>
        </div>
        <div className="hero__photo-col">
          <Avatar />
        </div>
      </div>
      <div className="hero__wave">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </header>
  )
}

function CopyButton({ text, label = 'Copy' }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <button
      type="button"
      className={`copy-btn ${copied ? 'copy-btn--copied' : ''}`}
      onClick={handleCopy}
      title={`Copy ${label}`}
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Copied</span>
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Projects', icon: '📁' },
  { id: 'production', label: 'Production Live', icon: '🚀' },
  { id: 'team', label: 'Team Collaboration', icon: '👥' },
  { id: 'blockchain', label: 'Blockchain', icon: '⛓️' },
  { id: 'ai', label: 'AI & ML', icon: '🧠' }
]

function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [expandedCards, setExpandedCards] = useState({})

  const toggleExpand = (num) => {
    setExpandedCards(prev => ({ ...prev, [num]: !prev[num] }))
  }

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab)

  const getTabCount = (tabId) => {
    if (tabId === 'all') return PROJECTS.length
    return PROJECTS.filter(p => p.category === tabId).length
  }

  return (
    <section id="projects" className="section">
      <div className="section__header-row">
        <div>
          <h2 className="section__title">Selected Projects</h2>
          <p className="section__subtitle">Production web applications, team projects, and academic research.</p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="project-tabs" role="tablist" aria-label="Project categories">
        {CATEGORY_TABS.map((tab) => {
          const count = getTabCount(tab.id)
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              className={`tab-btn ${isActive ? 'tab-btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-btn__icon" aria-hidden="true">{tab.icon}</span>
              <span className="tab-btn__label">{tab.label}</span>
              <span className="tab-btn__count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid">
        {filteredProjects.map((p) => {
          const isExpanded = !!expandedCards[p.num]
          const isProduction = p.category === 'production'

          return (
            <article key={p.title} className={`card ${p.featured ? 'card--featured' : ''} ${isExpanded ? 'card--expanded' : ''}`}>
              <span className="card__num" aria-hidden="true">{p.num}</span>
              {p.featured && <span className="card__featured">★ {p.featured}</span>}
              
              <div className="card__meta">
                <span className={`card__tag ${isProduction ? 'card__tag--live' : ''}`}>
                  {isProduction && <span className="pulse-dot" aria-hidden="true"></span>}
                  {p.tag}
                </span>
              </div>

              <h3 className="card__title">{p.title}</h3>

              {p.preview && (
                <a className="card__preview" href={p.demo || p.link} target="_blank" rel="noreferrer" aria-label={`${p.title} demo`}>
                  <img src={p.preview} alt={`${p.title} demo preview`} loading="lazy" />
                </a>
              )}

              {/* Punchy short description shown by default */}
              <p className="card__desc card__desc--summary">{p.shortDesc || p.desc}</p>

              {/* Quick links & stack preview */}
              <div className="card__actions-row">
                <div className="card__links">
                  {p.demo && (
                    <a className="card__link card__link--demo" href={p.demo} target="_blank" rel="noreferrer">
                      Live Demo &rarr;
                    </a>
                  )}
                  <a className="card__link" href={p.link} target="_blank" rel="noreferrer">
                    View on GitHub &rarr;
                  </a>
                </div>

                {/* Expand / Collapse Button */}
                <button
                  type="button"
                  className="card__expand-btn"
                  onClick={() => toggleExpand(p.num)}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Hide Details' : 'View Architecture & Details'}</span>
                  <svg
                    className={`card__expand-icon ${isExpanded ? 'card__expand-icon--open' : ''}`}
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              {/* Tech stack chips */}
              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>

              {/* Expanded Technical Details Drawer */}
              {isExpanded && (
                <div className="card__drawer">
                  <div className="card__drawer-inner">
                    <h4 className="card__drawer-heading">Overview</h4>
                    <p className="card__desc">{p.desc}</p>

                    {p.highlights && p.highlights.length > 0 && (
                      <div className="card__highlights">
                        <h4 className="card__drawer-heading">Key Engineering Highlights</h4>
                        <ul className="card__highlights-list">
                          {p.highlights.map((h, i) => (
                            <li key={i}>
                              <svg viewBox="0 0 20 20" width="14" height="14" fill="var(--color-accent)" className="check-icon" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {p.demoAccounts && (
                      <div className="card__demo-box">
                        <span className="card__demo-title">🔑 Live Demo Access Credentials:</span>
                        <div className="card__demo-creds">
                          {p.demoAccounts.map((acc, i) => (
                            <div key={i} className="card__demo-chip">
                              <span className="card__role-label">{acc.role}:</span>
                              <div className="card__cred-pair">
                                <span className="card__cred-val">
                                  <code>{acc.user}</code>
                                  <CopyButton text={acc.user} label={`${acc.role} user`} />
                                </span>
                                <span className="card__cred-val">
                                  <code>{acc.pass}</code>
                                  <CopyButton text={acc.pass} label={`${acc.role} pass`} />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>
      <div className="grid grid--skills">
        {SKILLS.map((s) => (
          <div key={s.group} className="card card--skill">
            <h3 className="card__title card__title--sm">{s.group}</h3>
            <ul className="chips">
              {s.items.map((i) => (
                <li key={i.name} className="chip">
                  {i.logo
                    ? <img src={i.logo} alt="" width="16" height="16" className={i.invert ? 'skill-logo skill-logo--invert' : 'skill-logo'} />
                    : <span aria-hidden="true">{i.icon}</span>
                  }
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About &amp; Education</h2>
      <div className="about">
        <div className="card">
          <h3 className="card__title card__title--sm">Education</h3>
          <div className="edu__list">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="edu__item">
                <div className="edu__year">{e.year}</div>
                <div className="edu__body">
                  <p className="edu__degree">{e.degree}</p>
                  <p className="edu__inst">{e.inst}</p>
                  <span className="edu__badge">{e.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 className="card__title card__title--sm">Certifications</h3>
          <ul className="about__list">
            {CERTS.map((c) => (
              <li key={c.name}>
                <a href={c.file} target="_blank" rel="noreferrer" className="cert__link">
                  {c.name}
                  <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 10 10 2M5 2h5v5"/></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="card__title card__title--sm">Competitions &amp; Activities</h3>
          <ul className="about__list">
            {ACHIEVEMENTS.map((a) => (
              <li key={a.name}>
                <a href={a.file} target="_blank" rel="noreferrer" className="cert__link">
                  {a.name}
                  <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 10 10 2M5 2h5v5"/></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <h2 className="section__title">Let&rsquo;s work together</h2>
      <p className="contact__lead">
        Open to full-time engineering opportunities, remote or on-site. Feel free to reach out directly.
      </p>
      <div className="contact__links">
        <div className="contact__link-item">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <CopyButton text={CONTACT.email} label="email" />
        </div>
        <div className="contact__link-item">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
          <CopyButton text={CONTACT.phone} label="phone" />
        </div>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="contact__social-link">LinkedIn &rarr;</a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact__social-link">GitHub &rarr;</a>
      </div>
    </section>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 450)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  )
}

export default function App() {
  const [year] = useState(() => new Date().getFullYear())

  useEffect(() => {
    document.title = `${CONTACT.name} — Full-Stack Engineer`
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <main className="wrap">
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {year} {CONTACT.name}</p>
      </footer>
      <BackToTop />
    </>
  )
}
