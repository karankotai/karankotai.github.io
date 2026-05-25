import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Core Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'AI & Data Systems',
    skills: [
      { name: 'RAG Architectures' },
      { name: 'LLM Integration (OpenAI, Gemini)' },
      { name: 'Embeddings & Vector Search' },
      { name: 'Evaluation Frameworks' },
      { name: 'Event Tracking (rrweb)' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vue 3' },
      { name: 'Tailwind CSS' },
      { name: 'Redux/Zustand' },
    ],
  },
  {
    category: 'Data & Storage',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Qdrant (vector)' },
      { name: 'Neo4j (graph)' },
      { name: 'Redis' },
      { name: 'Prisma' },
    ],
  },
  {
    category: 'System & Architecture',
    skills: [
      { name: 'System Design' },
      { name: 'Microservices' },
      { name: 'Message Queues (RabbitMQ/Kafka)' },
      { name: 'WebSockets' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)' },
      { name: 'Docker' },
      { name: 'CI/CD (GitHub Actions)' },
      { name: 'Cloudflare (Edge & CDN)' },
    ],
  },
  {
    category: 'Testing & Developer Tools',
    skills: [
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Playwright' },
      { name: 'Git' },
    ],
  },
]
