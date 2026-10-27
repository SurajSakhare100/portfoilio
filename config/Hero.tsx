import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Medium from '@/components/svgs/Medium';
import Pinterest from '@/components/svgs/Pinterest';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  name: 'Suraj Sakhare',
  title: 'Full Stack & AI Engineer',
  avatar: '/assets/logo.png', 

  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
  ],

  description: {
    template:
      "I engineer scalable full-stack applications and intelligent AI systems using {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}. Focused on <b>agentic AI loops</b>, <b>LLM orchestration</b>, and <b>high-performance architecture</b> — building fast, reliable products from natural language to production.",
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Contact Me',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/sakharesuraj100',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suraj-sakhare10/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/SurajSakhare100',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:sakharesuraj10@gmail.com',
    icon: <Mail />,
  },
  {
    name:'Pinterest',
    href:'https://in.pinterest.com/sakharesuraj10/',
    icon:<Pinterest />
  },
  {
    name:'Medium',
    href:'https://medium.com/@sakharesuraj10',
    icon:<Medium />
  }
];
