export interface PersonalInfo {
  name: string
  title: string
  bio: string
  traits: string[]
  location: string
  phone: string
  email: string
  github: string
  linkedin: string
  resume: string
}

export interface Skill {
  name: string
  icon?: string
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  live: string
  repo: string
}

export interface Experience {
  hash: string
  company: string
  role: string
  period: string
  achievements: string[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  avatar?: string
}

export interface BlogPost {
  title: string
  description: string
  date: string
  url: string
  tags: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
