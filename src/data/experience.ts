import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    hash: 'b8e1f4a',
    company: 'Peach.study',
    role: 'Software Development Engineer I',
    period: '2024 - Present',
    achievements: [
      'Built Ask CA end-to-end as sole engineer — a RAG assistant for Chartered Accountants ingesting circulars from 13 Indian regulators (RBI, SEBI, MCA, CBDT, GST Council, IRDAI), with a Python/FastAPI backend handling crawling, OCR, indexing, retrieval, and evaluation.',
      'Implemented hybrid retrieval combining Qdrant (vector) and Neo4j (graph) for amendment and supersession queries between regulatory circulars, validated via a custom evaluation framework on blind GST test sets.',
      'Built an asynchronous AI feedback pipeline integrating LLM-based evaluation with rubric-driven grading, enabling scalable automated feedback within teacher review workflows.',
      'Designed and optimized MongoDB aggregation pipelines powering class-level analytics and collective performance reporting across large student datasets.',
      'Developed data-intensive teacher dashboards using React, Next.js, and React Query, managing complex server-state synchronization and dynamic analytics views.',
      'Engineered an assessment integrity system using rrweb-based session recording to detect tab switching, paste events, and behavioral anomalies during online assessments.',
    ],
  },
  {
    hash: 'c5d9e3b',
    company: 'Masai School',
    role: 'Instructional Associate (Part-Time)',
    period: '2023',
    achievements: [
      'Mentored students in Data Structures, Algorithms, and full-stack development, debugging complex coding issues and guiding structured problem-solving.',
      'Conducted mock technical interviews simulating real hiring processes, evaluating problem-solving, system design thinking, and code quality.',
      'Provided actionable feedback that targeted the specific habits each student kept tripping on, so the next round of practice was aimed at fixing something concrete.',
    ],
  },
]
