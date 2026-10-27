import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="inline-flex items-center align-middle text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-0.5 px-2 rounded-md skill-inner-shadow text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/25 transition-colors my-0.5"
    >
      <span className="size-4 flex-shrink-0 inline-flex items-center justify-center">{children}</span>
      <span className="ml-1 text-sm font-semibold">{name}</span>
    </Link>
  );
}
