import TypeScript from '@/components/technologies/TypeScript';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import { Project } from '@/types/project';
import { AI } from '@/components/components/technologies/AI';
import { LangChain } from '@/components/components/technologies/LangChain';
import { Groq } from '@/components/components/technologies/Groq';
import { Postgres } from '@/components/components/technologies/Postgres';

export const projects: Project[] = [
  {
    title: 'Oryn',
    description:
      'An AI-powered answer engine (like Perplexity) that combines LLMs with real-time web search to generate accurate, context-aware responses with source citations.',
    image: '/project/oryn.png',
    video: '',
    link: 'https://oryn.surajx.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'AI', icon: <AI key="AI" /> },
      { name: 'LangChain', icon: <LangChain key="LangChain" /> },
      { name: 'Groq', icon: <Groq key="Groq" /> },
      { name: 'Postgres', icon: <Postgres key="Postgres" /> },
    ],
    github: 'https://github.com/SurajSakhare100/oryn',
    live: 'https://oryn.surajx.in',
    details: true,
    projectDetailsPageSlug: '/projects/oryn',
    isWorking: true,
  },

  {
    title: 'Invo',
    description:
      'Enterprise-grade invoice management system with RBAC, dashboards, and business analytics',
    image: '/project/invo.png',
    video: '',
    link: 'https://invo.surajx.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/SurajSakhare100/invo',
    live: 'https://invo.surajx.in',
    details: true,
    projectDetailsPageSlug: '/projects/invo',
    isWorking: true,
  },

  {
    title: 'Habit Pulse',
    description:
      'Full-stack habit tracker SaaS with OTP login, analytics, reminders, and subscription payments',
    image: '/project/habitpulse.png',
    video: '',
    link: 'https://habitpulse.xyz',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Firebase', icon: <MongoDB key="firebase" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Docker', icon: <Bun key="docker" /> },
    ],
    github: 'https://github.com/SurajSakhare100/habit-pulse',
    live: 'https://habitpulse.xyz',
    details: true,
    projectDetailsPageSlug: '/projects/habit-pulse',
    isWorking: true,
  },

  {
    title: 'Byte',
    description:
      'A modern platform for tech articles covering programming, AI, cloud technologies, and open source.',
    image: '/project/byte.png',
    video: '',
    link: 'https://byte.surajx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/SurajSakhare100/Byte',
    live: 'https://byte.surajx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/byte',
    isWorking: true,
  },
];