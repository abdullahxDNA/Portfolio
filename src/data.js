// ────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT
//  This is the ONLY file you need to edit to add/remove/change portfolio content.
//  After editing, commit and push — the site rebuilds and deploys automatically.
// ────────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  name: 'MD Abdullah',
  location: 'Chattogram, Bangladesh',
  email: 'mdabdullah10301@gmail.com',
  phone: '+880 1741012650',
  linkedin: 'https://www.linkedin.com/in/abdullahlisan',
  github: 'https://github.com/abdullahxDNA',
}

// Rotating roles shown in the hero typewriter effect.
export const ROLES = ['Web Developer', 'CSE Graduate', 'IT Professional', 'Open to Opportunities']

// Short intro paragraph under the hero heading.
export const PITCH =
  "Computer Science & Engineering graduate with practical team project experience " +
  "in web development using React, Hono, and PostgreSQL. Comfortable with PRD-based " +
  "planning, Git workflow, and AI-assisted development. Open to roles in web development, " +
  "IT support, software QA, data entry, and any IT-related field."

// Devicon CDN base — used to build skill logo URLs below.
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

// Skills, grouped. Each item needs a `name`, plus either a `logo` URL or an `icon` emoji.
// Add `invert: true` for dark logos that need inverting in dark mode.
export const SKILLS = [
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

// Projects. To add one, copy a block and edit. To remove one, delete its block.
//   num     – the number badge (e.g. '05')
//   title   – project name
//   tag     – small label above the title
//   featured– optional; set to a string (e.g. 'Featured') to show a ★ ribbon
//   preview – optional image/gif URL shown as a preview thumbnail
//   desc    – description paragraph
//   stack   – array of tech chips
//   link    – GitHub (or source) URL
//   demo    – optional live/deployed URL; shows a "Live Demo" button when present
export const PROJECTS = [
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

// Certifications. Each: `name` (text shown) and `file` (path under /public).
export const CERTS = [
  { name: 'Fullstack Blockchain Development — NonAcademy (Batch 02), 2025', file: '/certificates/non-academy.png' },
  { name: 'Front-End Development — EDGE Project, CUET / Bangladesh Computer Council, 2024', file: '/certificates/edge-certificate.pdf' },
  { name: 'Introduction to Blockchain Technology — Ostad', file: '/certificates/blockchain-ostad.pdf' },
  { name: 'Online Leadership Course — Aspire Leaders Program, 2023', file: '/certificates/harvard-leadership.pdf' },
]

// Competitions & activities. Each: `name` and `file` (path under /public).
export const ACHIEVEMENTS = [
  { name: 'IIUC Business Case Competition (IIUCBCC)', file: '/certificates/iiucbcc.pdf' },
  { name: 'Face the Case — IEEE IIUC Student Branch', file: '/certificates/face-the-case-ieee.pdf' },
  { name: 'Debate Competition — IIUC', file: '/certificates/debate-iiuc.jpg' },
  { name: 'Hult Prize — IIUC Campus Round', file: '/certificates/hult-prize.png' },
  { name: 'IDEA-GEN Competition', file: '/certificates/idea-gen.jpg' },
  { name: 'Event Ambassador', file: '/certificates/event-ambassador.png' },
]

// Education entries, shown newest first.
export const EDUCATION = [
  {
    year: '2021 – 2025',
    degree: 'B.Sc. in Computer Science & Engineering',
    inst: 'International Islamic University Chittagong (IIUC)',
    badge: 'CGPA 3.367',
  },
  {
    year: '2018 – 2019',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    inst: 'Hazera-Taju University College',
    badge: 'GPA 4.33',
  },
  {
    year: '2016 – 2017',
    degree: 'Secondary School Certificate (SSC) — Science',
    inst: 'CDA Public School and College',
    badge: 'GPA 5.00',
  },
]
