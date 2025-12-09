import LinkedIn from '@/components/svgs/LinkedIn';
import AWS from '@/components/technologies/AWS';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
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
    isCurrent: true,
    company: 'THE FRICK',
    position: 'Product Developer Intern',
    location: 'Mumbai, India (Remote)',
    image: '/company/frick.png',
    description: [
      'Developed core modules for a multi-vendor e-commerce app using Next.js, Node.js, and MongoDB.',
      'Improved API performance by 35% through indexing, caching, and database optimization.',
      'Integrated Sanity CMS, reducing client dependency on developers by 70%.',
      'Built CI/CD pipelines using Docker and GitHub Actions for zero-downtime deployments.',
    ],
    startDate: 'June 2025',
    endDate: 'Present',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
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
    company: 'GirlScript Summer of Code',
    position: 'Open Source Contributor',
    location: 'Remote - India',
    image: '/company/gssoc.png',
    description: [
      'Merged 6+ pull requests across full-stack codebases improving API structure and stability.',
      'Enhanced CI/CD workflows reducing build errors by 20% and improving deployment reliability.',
      'Contributed to frontend and backend optimizations across open-source repositories.',
    ],
    startDate: 'October 2024',
    endDate: 'November 2024',
    technologies: [
      { name: 'JavaScript', href: 'https://javascript.com/', icon: <JavaScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
    ],
    website: 'https://gssoc.girlscript.tech',
    linkedin: 'https://www.linkedin.com/company/girlscript-foundation/',
    github: 'https://github.com/GirlScriptSummerOfCode',
  },
];
