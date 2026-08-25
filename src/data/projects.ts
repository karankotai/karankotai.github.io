import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Ask CA',
    description: 'Production RAG assistant for Indian Chartered Accountants, live as RegMitra. Ingests circulars from 13 regulators and answers source-grounded compliance questions with hybrid Qdrant + Neo4j retrieval, OCR, citation-aware responses, and a custom eval harness for blind GST test sets.',
    tech: ['Python', 'FastAPI', 'Next.js', 'Qdrant', 'Neo4j', 'PostgreSQL', 'OpenAI', 'Gemini'],
    live: 'https://reg-mitra-mvp.vercel.app/',
    repo: 'https://github.com/karankotai/ask-ca',
  },
  {
    title: 'The Gang',
    description: 'Realtime web adaptation of the cooperative poker board game, built for remote groups to play together. PartyKit handles multi-room state sync while the Next.js client keeps table state, invitations, and turn flow responsive.',
    tech: ['Next.js', 'TypeScript', 'PartyKit', 'WebSockets'],
    live: 'https://the-gang-sooty.vercel.app/',
    repo: 'https://github.com/karankotai/the-gang',
  },
  {
    title: 'Fretwise',
    description: 'Native iOS guitar companion that listens through the microphone and identifies chords in real time. Built with SwiftUI and AVFoundation around a custom audio DSP pipeline for low-latency chord detection.',
    tech: ['Swift', 'SwiftUI', 'AVFoundation', 'Audio DSP'],
    live: '/projects/fretwise/',
  },
  {
    title: 'InfoScroll',
    description: 'Mobile learning feed that turns idle scrolling into swipeable concept cards and curated short videos. Built with Expo Router, a Supabase auth/feed backend, personalized seen/saved/skipped state, and a TypeScript content pipeline that validates and uploads generated cards.',
    tech: ['Expo', 'React Native', 'Supabase', 'Zustand', 'TypeScript'],
    live: '/projects/infoscroll/',
    repo: 'https://github.com/karankotai/infoscroll',
  },
  {
    title: 'Doom',
    description: 'Experimental learning platform for decision-based applets, progression loops, and adaptive study mechanics. Explores how AI-assisted education can feel more like interactive practice than passive content consumption.',
    tech: ['Next.js', 'Hono', 'PostgreSQL', 'Bun', 'TypeScript'],
    live: 'https://doom-frontend.vercel.app/',
    repo: 'https://github.com/karankotai/doom',
  },
  {
    title: 'Masai Flow',
    description: 'Learning platform prototype with a modular quiz engine, cleaner application architecture, and optimized data flow across React, Express, and MongoDB.',
    tech: ['React', 'Express', 'MongoDB'],
    live: 'https://masai-flow.vercel.app/',
    repo: 'https://github.com/karankotai/Masai-Flow',
  },
]
