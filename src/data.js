// ────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT
//  Content now lives in the JSON files under src/content/ so it can be edited
//  through the admin panel at /admin (no code changes needed).
//  You can still edit those JSON files by hand — after any change, commit and
//  push and the site rebuilds and deploys automatically.
//  This file just re-exports that content in the shape the app expects.
// ────────────────────────────────────────────────────────────────────────────

import contact from './content/contact.json'
import general from './content/general.json'
import skills from './content/skills.json'
import projects from './content/projects.json'
import certs from './content/certs.json'
import achievements from './content/achievements.json'
import education from './content/education.json'

export const CONTACT = contact

// Rotating roles shown in the hero typewriter effect.
export const ROLES = general.roles

// Short intro paragraph under the hero heading.
export const PITCH = general.pitch

// Skills, grouped. Each item has a `name`, plus either a `logo` URL or an `icon` emoji.
export const SKILLS = skills.groups

// Projects, newest/most-important first.
export const PROJECTS = projects.items

// Certifications. Each: `name` and `file` (path under /public).
export const CERTS = certs.items

// Competitions & activities.
export const ACHIEVEMENTS = achievements.items

// Education entries, shown newest first.
export const EDUCATION = education.items
