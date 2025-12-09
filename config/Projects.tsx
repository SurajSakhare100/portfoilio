import TypeScript from '@/components/technologies/TypeScript';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import { Project } from '@/types/project';
import Vercel from '@/components/technologies/Vercel';

export const projects: Project[] = [
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
    title: 'ReadSpark',
    description:
      'AI-powered tool for generating and syncing GitHub READMEs using Gemini AI and GitHub API',
    image: '/project/readspark.png',
    video: '',
    link: 'https://readspark.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'GitHub API', icon: <Github key="github" /> },
      { name: 'Gemini AI', icon: <Motion key="gemini" /> },
    ],
    github: 'https://github.com/SurajSakhare100/ReadSpark',
    live: 'https://readspark.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/readspark',
    isWorking: true,
  },

  {
    title: 'TrendWave',
    description:
      'Scalable MERN e-commerce app with user auth, PayPal payments, media uploads, and role-based dashboards',
    image: '/project/trendwave.png',
    video: '',
    link: 'https://itstrendwave.vercel.app/',
    technologies: [
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Cloudinary', icon: <Netlify key="cloudinary" /> },
      { name: 'PayPal API', icon: <NextJs key="paypal" /> },
      { name: 'JWT', icon: <TypeScript key="jwt" /> },
    ],
    github: 'https://github.com/SurajSakhare100/TrendWave',
    live: 'https://itstrendwave.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/trendwave',
    isWorking: true,
  },
 {
  title: 'EarlyLaunch',
  description:
    'A no-code waitlist & pre-launch validation platform to help makers test SaaS ideas before building the full product.',
  image: '/project/earlylaunch.png', 
  video: '',
  link: 'https://earlylaunch.xyz/',
  technologies: [
    { name: 'Next.js', icon: <NextJs key="nextjs" /> },
    { name: 'React', icon: <ReactIcon key="react" /> },
    { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    { name: 'Vercel', icon: <Vercel key="vercel" /> },
  ],
  github: 'https://github.com/SurajSakhare100/earlylaunch', 
  live: 'https://earlylaunch.xyz',
  details: true,
  projectDetailsPageSlug: '/projects/earlylaunch',
  isWorking: true,
}

];
