import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Doom',
    description: 'Interactive learning platform with structured courses, AI-powered applets, XP progression, and streak-based gamification for hands-on education.',
    tech: ['Next.js', 'Hono', 'PostgreSQL', 'Bun', 'TypeScript'],
    live: 'https://doom-frontend.vercel.app/',
    repo: 'https://github.com/karankotai/doom',
  },
  {
    title: 'Ask-CA',
    description: 'RAG-powered Q&A app that crawls government documents, stores them in PostgreSQL, and answers queries with source-cited responses benchmarked against GPT and Gemini.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'RAG', 'Tailwind CSS'],
    live: 'https://ask-ca.vercel.app/',
    repo: 'https://github.com/karankotai/ask-ca',
  },
  {
      title: 'Discord Clone',
      description: 'Real-time messaging platform implementing channel-based communication, media uploads, and authenticated user sessions.',
    tech: ['Next.js', 'Clerk', 'React', 'Tailwind CSS'],
    live: 'https://discord-clone-eodjnjs66-karnkings-projects.vercel.app/invite/4dd94ced-2eb8-4ae0-954a-da152efef73f',
    repo: 'https://github.com/karankotai/discord-clone',
  },
  {
    title: 'Masai Flow',
    description: 'Built a modular learning platform featuring an interactive quiz engine, improved application architecture, and optimized data flow.',
    tech: ['React', 'Express', 'MongoDB'],
    live: 'https://masai-flow.vercel.app/',
    repo: 'https://github.com/karankotai/Masai-Flow',
  },
]
