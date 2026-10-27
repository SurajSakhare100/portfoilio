import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}
export const experiences = [
  {
    isCurrent: false,
    company: 'FRICK',
    position: 'Software Engineering Intern',
    location: 'Remote, India',
    image: '/company/frick.png',
    description: [
      'Developed scalable end-to-end features for a multi-vendor e-commerce platform (multi-tenant).',
      'Implemented Role-Based Access Control (RBAC) to enforce permissions across admin roles, securing store data, dashboard features, and administrative actions.',
      'Built CMS-driven websites with React.js and Sanity CMS, reducing deployment time by 70%.',
    ],
    startDate: 'Jun 2025',
    endDate: 'Feb 2026',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Sanity CMS', href: 'https://sanity.io/', icon: <Sanity /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
      { name: 'AWS', href: 'https://aws.amazon.com/', icon: <AWS /> },
      { name: 'Postman', href: 'https://postman.com/', icon: <Postman /> },
      { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
    ],
    website: 'https://thefrick.company',
    github: 'https://github.com/thefrick',
    linkedin: 'https://www.linkedin.com/company/frick',
  },

  {
    isCurrent: false,
    company: 'GirlScript Summer of Code (GSSoC)',
    position: 'Open Source Contributor',
    location: 'Remote',
    image: '/company/gssoc.png',
    description: [
      'Built reusable React.js components for open-source projects, improving UI consistency.',
      'Built RESTful APIs; delivered 10+ enhancements and submitted 8+ pull requests.',
    ],
    startDate: 'Oct 2024',
    endDate: 'Nov 2024',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'JavaScript', href: 'https://javascript.com/', icon: <JavaScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
    ],
    website: 'https://gssoc.girlscript.tech',
    linkedin: 'https://www.linkedin.com/company/girlscript-foundation/',
    github: 'https://github.com/GirlScriptSummerOfCode',
  },
];
