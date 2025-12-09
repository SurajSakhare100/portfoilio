import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: heroConfig.name,
  title: 'Suraj Sakhare – Portfolio',
  description: 'Full Stack Developer Portfolio of Suraj Sakhare',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@sakharesuraj100',
    github: 'SurajSakhare100',
    linkedin: 'suraj-sakhare10',
    email: 'sakharesuraj10@gmail.com',
  },
  keywords: [
    'suraj sakhare',
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'typescript',
    'software engineer',
    'web development',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my projects, experience, achievements, and skills.`,
    keywords: [
      'suraj sakhare',
      'portfolio',
      'full stack developer',
      'software engineer',
      'projects',
      'nextjs developer',
      'mern developer',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      "Reach out for collaborations, freelance work, or opportunities. Let's build something impactful together.",
    keywords: [
      'contact',
      'hire developer',
      'collaboration',
      'freelance',
      'software engineer',
    ],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Explore my work experience at THE FRICK and my open-source contributions at GSSoC.',
    keywords: [
      'suraj sakhare',
      'work experience',
      'software developer',
      'the frick',
      'gsoc',
      'internship',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  '/projects': {
    title: 'Projects - My Work & Portfolio',
    description:
      'Browse my real-world projects including Habit Pulse, ReadSpark, TrendWave, and AI-powered tools.',
    keywords: [
      'projects',
      'portfolio',
      'web apps',
      'saas',
      'mern stack',
      'full stack projects',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  '/blog': {
    title: 'Blog - Insights & Tutorials',
    description:
      'Read tutorials, engineering breakdowns, productivity tips, and software development insights.',
    keywords: [
      'blog',
      'tutorials',
      'programming',
      'development tips',
      'engineering insights',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  '/resume': {
    title: 'Resume - Professional CV',
    description: `Download the professional resume of ${heroConfig.name}. Includes experience at THE FRICK, GSSoC contributions, skills, and achievements.`,
    keywords: [
      'resume',
      'cv',
      'suraj sakhare resume',
      'software developer cv',
      'download cv',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
