import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Doom',
    description: 'Experimental learning platform exploring AI-assisted education through decision-based applets, progression systems, and adaptive user engagement mechanics.',
    tech: ['Next.js', 'Hono', 'PostgreSQL', 'Bun', 'TypeScript'],
    live: 'https://doom-frontend.vercel.app/',
    repo: 'https://github.com/karankotai/doom',
  },
  // {
  //   title: 'Ask-CA',
  //   description: 'Built a RAG pipeline that ingests and chunks government documents, performs semantic retrieval, and generates source-grounded answers benchmarked against GPT and Gemini.',
  //   tech: ['Next.js', 'Prisma', 'PostgreSQL', 'RAG Architecture', 'Tailwind CSS'],
  //   live: 'https://ask-ca.vercel.app/',
  //   repo: 'https://github.com/karankotai/ask-ca',
  // },
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
