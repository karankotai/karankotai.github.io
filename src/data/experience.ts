import type { Experience } from '@/types'

export const experiences: Experience[] = [
  // {
  //   hash: 'a3f7c2d',
  //   company: 'Acme Corp',
  //   role: 'SDE-2 (Full Stack)',
  //   period: '2025 - Present',
  //   achievements: [
  //     'Architected and led migration of monolith to microservices, reducing deploy times by 60%',
  //     'Designed event-driven pipelines with RabbitMQ handling 50k+ messages/day',
  //     'Owned end-to-end delivery of payment integration module serving 100k+ users',
  //     'Mentored 3 junior engineers through code reviews and design sessions',
  //   ],
  // },
  {
    hash: 'b8e1f4a',
    company: 'Learno.ai',
    role: 'Software Development Engineer I',
    period: '2024 - Present',
    achievements: [
      'Led development of a Next.js dashboard using Server Components, reducing TTFB by 45% and improving perceived load performance.',
      'Owned production deployment infrastructure on DigitalOcean with Cloudflare CDN and routing, enabling stable zero-downtime releases.',
      'Designed PostgreSQL data models and scalable REST APIs supporting 10k+ daily active users and analytics-heavy workflows.',
      'Introduced Playwright E2E testing, achieving 85% coverage across business-critical user flows and reducing regression issues.',
    ],
  },
  {
    hash: 'c5d9e3b',
    company: 'Masai School',
    role: 'Full Stack Development Student',
    period: '2022 - 2023',
    achievements: [
      'Completed intensive full-stack web development program',
      'Built 10+ production-grade projects using MERN stack and modern tooling',
      'Practiced agile methodologies, pair programming, and system design fundamentals',
    ],
  },
]
