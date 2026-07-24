import { useState, useEffect } from 'react'

const CONTACT = {
  name: 'MD Abdullah',
  location: 'Chattogram, Bangladesh',
  email: 'mdabdullah10301@gmail.com',
  phone: '+880 1741012650',
  linkedin: 'https://www.linkedin.com/in/abdullahlisan',
  github: 'https://github.com/abdullahxDNA',
}

const ROLES = ['Web Developer', 'CSE Graduate', 'IT Professional', 'Open to Opportunities']

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const SKILLS = [
  { group: 'Programming', items: [
    { name: 'C',           logo: `${DI}/c/c-original.svg` },
    { name: 'C++',         logo: `${DI}/cplusplus/cplusplus-original.svg` },
    { name: 'JavaScript (Basic)',  logo: `${DI}/javascript/javascript-original.svg` },
    { name: 'TypeScript (Basic)',  logo: `${DI}/typescript/typescript-original.svg` },
    { name: 'Python (Basic)',      logo: `${DI}/python/python-original.svg` },
  ]},
  { group: 'Web Development', items: [
    { name: 'HTML',        logo: `${DI}/html5/html5-original.svg` },
    { name: 'CSS',         logo: `${DI}/css3/css3-original.svg` },
    { name: 'React (Basic)',logo: `${DI}/react/react-original.svg` },
    { name: 'Tailwind CSS',logo: `${DI}/tailwindcss/tailwindcss-original.svg` },
  ]},
  { group: 'Database', items: [
    { name: 'PostgreSQL (Basic)',  logo: `${DI}/postgresql/postgresql-original.svg` },
    { name: 'MySQL (Basic)',       logo: `${DI}/mysql/mysql-original.svg` },
  ]},
  { group: 'Tools & Workflow', items: [
    { name: 'Git',         logo: `${DI}/git/git-original.svg` },
    { name: 'GitHub',      logo: `${DI}/github/github-original.svg`, invert: true },
    { name: 'VS Code',     logo: `${DI}/vscode/vscode-original.svg` },
    { name: 'ClickUp',     logo: 'https://cdn.simpleicons.org/clickup' },
    { name: 'AI-Assisted Dev', icon: '🤖' },
  ]},
  { group: 'Academic Exposure', items: [
    { name: 'Blockchain Concepts',           logo: `${DI}/ethereum/ethereum-original.svg` },
    { name: 'Hyperledger Fabric (Concepts)', logo: `${DI}/apachekafka/apachekafka-original.svg`, invert: true },
    { name: 'ML Workflow (Academic)',         logo: `${DI}/tensorflow/tensorflow-original.svg` },
  ]},
]

const PROJECTS = [
  {
    num: '01',
    title: 'Tamurfood — B2B Bakery Ordering',
    tag: 'Solo Project · Deployed (Demo) · 2026',
    preview: 'https://cdn.jsdelivr.net/gh/abdullahxDNA/Tamurfood@main/docs/screenshots/demo.gif',
    desc: 'A full-stack B2B ordering platform for a neighbourhood bakery, built solo and deployed for demo/testing. Nearby shops order from a live menu; bakery staff fulfil and deliver in real time. Features three-tier role-based access (admin/moderator/shop), real-time order updates over SSE, a per-shop "Khata" credit ledger with partial payments, concurrency-safe inventory, and an analytics dashboard. I wrote the PRD, designed the data model and workflows, and built the full monorepo (Hono API + React frontend) from scratch.',
    stack: ['React 19', 'Hono', 'Bun', 'PostgreSQL', 'Drizzle ORM', 'Better Auth', 'Server-Sent Events', 'Tailwind CSS'],
    link: 'https://github.com/abdullahxDNA/Tamurfood',
    demo: 'https://tampurfood-production.up.railway.app/',
  },
  {
    num: '02',
    title: 'DeshGhuri — Travel Marketplace',
    tag: 'Team Project · 2025–2026',
    desc: 'Wrote the PRD and managed feature breakdown in ClickUp. My contribution: seller authentication routes, seller dashboard backend API, and admin verification system. Collaborated with 2 teammates using Git branching workflow.',
    stack: ['React', 'TanStack Router', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    link: 'https://github.com/samin124/DeshGhuri',
    demo: '', // ← paste the live/deployed URL here to show a "Live Demo" button
  },
  {
    num: '03',
    title: 'Agrifood Blockchain Supply Chain',
    tag: 'B.Sc. Thesis · 2024–2025',
    desc: 'Designed the traceability workflow for farmer → retailer → customer lifecycle. Understood and documented Hyperledger Fabric concepts. Contributed to testing, documentation, and thesis presentation. Chaincode was AI-assisted.',
    stack: ['Hyperledger Fabric', 'Go (AI-assisted)', 'Docker', 'CouchDB'],
    link: 'https://github.com/abdullahxDNA/agrifood-blockchain-hyperledger',
  },
  {
    num: '04',
    title: 'Lung Cancer Detection — Ensemble CNNs',
    tag: 'University Project · 2025',
    desc: 'Academic project combining Xception and ResNet50 for medical image classification. Worked on dataset preparation, training workflow, and evaluation metrics. Note: academic learning project only.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn'],
    link: 'https://github.com/abdullahxDNA/lung_cancer_prediction_using_ML',
  },
]

const CERTS = [
  { name: 'Fullstack Blockchain Development — NonAcademy (Batch 02), 2025', file: '/certificates/non-academy.png' },
  { name: 'Front-End Development — EDGE Project, CUET / Bangladesh Computer Council, 2024', file: '/certificates/edge-certificate.pdf' },
  { name: 'Introduction to Blockchain Technology — Ostad', file: '/certificates/blockchain-ostad.pdf' },
  { name: 'Online Leadership Course — Aspire Leaders Program, 2023', file: '/certificates/harvard-leadership.pdf' },
]

const ACHIEVEMENTS = [
  { name: 'IIUC Business Case Competition (IIUCBCC)', file: '/certificates/iiucbcc.pdf' },
  { name: 'Face the Case — IEEE IIUC Student Branch', file: '/certificates/face-the-case-ieee.pdf' },
  { name: 'Debate Competition — IIUC', file: '/certificates/debate-iiuc.jpg' },
  { name: 'Hult Prize — IIUC Campus Round', file: '/certificates/hult-prize.png' },
  { name: 'IDEA-GEN Competition', file: '/certificates/idea-gen.jpg' },
  { name: 'Event Ambassador', file: '/certificates/event-ambassador.png' },
]

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
          <p className="hero__pitch">
            Computer Science &amp; Engineering graduate with practical team project experience
            in web development using React, Hono, and PostgreSQL. Comfortable with PRD-based
            planning, Git workflow, and AI-assisted development. Open to roles in web development,
            IT support, software QA, data entry, and any IT-related field.
          </p>
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

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Selected Projects</h2>
      <div className="grid">
        {PROJECTS.map((p) => (
          <article key={p.title} className={`card ${p.featured ? 'card--featured' : ''}`}>
            <span className="card__num" aria-hidden="true">{p.num}</span>
            {p.featured && <span className="card__featured">★ {p.featured}</span>}
            <span className="card__tag">{p.tag}</span>
            <h3 className="card__title">{p.title}</h3>
            {p.preview && (
              <a className="card__preview" href={p.demo || p.link} target="_blank" rel="noreferrer" aria-label={`${p.title} demo`}>
                <img src={p.preview} alt={`${p.title} demo preview`} loading="lazy" />
              </a>
            )}
            <p className="card__desc">{p.desc}</p>
            <ul className="chips">
              {p.stack.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
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
          </article>
        ))}
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
            <div className="edu__item">
              <div className="edu__year">2021 – 2025</div>
              <div className="edu__body">
                <p className="edu__degree">B.Sc. in Computer Science &amp; Engineering</p>
                <p className="edu__inst">International Islamic University Chittagong (IIUC)</p>
                <span className="edu__badge">CGPA 3.367</span>
              </div>
            </div>
            <div className="edu__item">
              <div className="edu__year">2018 – 2019</div>
              <div className="edu__body">
                <p className="edu__degree">Higher Secondary Certificate (HSC) — Science</p>
                <p className="edu__inst">Hazera-Taju University College</p>
                <span className="edu__badge">GPA 4.33</span>
              </div>
            </div>
            <div className="edu__item">
              <div className="edu__year">2016 – 2017</div>
              <div className="edu__body">
                <p className="edu__degree">Secondary School Certificate (SSC) — Science</p>
                <p className="edu__inst">CDA Public School and College</p>
                <span className="edu__badge">GPA 5.00</span>
              </div>
            </div>
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
        Open to any IT-related opportunity. Feel free to reach out.
      </p>
      <div className="contact__links">
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}

export default function App() {
  const [year] = useState(() => new Date().getFullYear())

  useEffect(() => {
    document.title = `${CONTACT.name} — Web Developer`
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
    </>
  )
}
