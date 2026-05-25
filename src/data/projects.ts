import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Ask CA',
    description: 'Production RAG assistant for Indian Chartered Accountants. Ingests circulars from 13 regulators (RBI, SEBI, MCA, CBDT, GST Council, IRDAI) and answers natural-language queries grounded in source documents. Built end-to-end as sole engineer — crawling, OCR, indexing, hybrid Qdrant + Neo4j retrieval, and a custom eval framework benchmarking against GPT and Gemini on blind GST test sets.',
    tech: ['Python', 'FastAPI', 'Next.js', 'Qdrant', 'Neo4j', 'PostgreSQL', 'OpenAI', 'Gemini'],
    live: 'https://ask-ca.vercel.app/',
    repo: 'https://github.com/karankotai/ask-ca',
  },
  {
    title: 'RegMitra',
    description: 'Regulatory-intelligence product for Indian Chartered Accountants. Designed the MVP architecture covering source ingestion, classification, and reviewer-facing surfaces.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python', 'Playwright'],
    live: 'https://reg-mitra-mvp.vercel.app/',
    repo: 'https://github.com/karankotai/ask-ca',
  },
  {
    title: 'The Gang',
    description: 'Web app recreating the cooperative poker board game for playing with friends online. Realtime multi-room state sync with PartyKit on top of a Next.js client.',
    tech: ['Next.js', 'TypeScript', 'PartyKit', 'WebSockets'],
    live: 'https://the-gang-sooty.vercel.app/',
    repo: 'https://github.com/karankotai/the-gang',
  },
  {
    title: 'Fretwise',
    description: 'iOS guitar app with real-time chord detection — listens to audio input through a custom DSP pipeline and identifies chords on the fly. Built in Swift/SwiftUI.',
    tech: ['Swift', 'SwiftUI', 'AVFoundation', 'Audio DSP'],
  },
  {
    title: 'InfoScroll',
    description: 'Personal learning feed app built to replace doomscrolling reels with bite-sized educational content. Expo client, Supabase backend, Gemini for content generation.',
    tech: ['Expo', 'React Native', 'Supabase', 'Gemini', 'TypeScript'],
  },
  {
    title: 'Doom',
    description: 'Experimental learning platform exploring AI-assisted education through decision-based applets, progression systems, and adaptive user engagement mechanics.',
    tech: ['Next.js', 'Hono', 'PostgreSQL', 'Bun', 'TypeScript'],
    live: 'https://doom-frontend.vercel.app/',
    repo: 'https://github.com/karankotai/doom',
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
    description: 'Modular learning platform featuring an interactive quiz engine, improved application architecture, and optimized data flow.',
    tech: ['React', 'Express', 'MongoDB'],
    live: 'https://masai-flow.vercel.app/',
    repo: 'https://github.com/karankotai/Masai-Flow',
  },
]
