import { projects } from '@/config/Projects';
import {
  Project,
  ProjectCaseStudy,
  ProjectCaseStudyFrontmatter,
  ProjectCaseStudyPreview,
} from '@/types/project';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), '/data/projects');


export function getProjectCaseStudySlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}


export function getProjectCaseStudyBySlug(
  slug: string,
): ProjectCaseStudy | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    interface RawProjectFrontmatter {
      title?: string;
      description?: string;
      image?: string;
      technologies?: string[];
      tags?: string[];
      github?: string;
      githubUrl?: string;
      live?: string;
      liveUrl?: string;
      timeline?: string;
      date?: string;
      role?: string;
      team?: string;
      status?: 'completed' | 'in-progress' | 'archived';
      featured?: boolean;
      challenges?: string[];
      learnings?: string[];
      isPublished?: boolean;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const rawData = data as RawProjectFrontmatter;
    if (!rawData.title || !rawData.description) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    const projectInConfig = projects.find(
      (p) =>
        p.projectDetailsPageSlug === `/projects/${slug}` ||
        p.title.toLowerCase() === slug.toLowerCase(),
    );

    const frontmatter: ProjectCaseStudyFrontmatter = {
      title: rawData.title,
      description: rawData.description,
      image: rawData.image || projectInConfig?.image || `/project/${slug}.png`,
      technologies:
        rawData.technologies ||
        rawData.tags ||
        (projectInConfig ? projectInConfig.technologies.map((t) => t.name) : []),
      github:
        rawData.github ||
        rawData.githubUrl ||
        projectInConfig?.github ||
        'https://github.com/SurajSakhare100',
      live:
        rawData.live ||
        rawData.liveUrl ||
        projectInConfig?.live ||
        '#',
      timeline: rawData.timeline || rawData.date || '2026',
      role: rawData.role || 'Full Stack Developer',
      team: rawData.team,
      status: rawData.status || 'completed',
      featured: rawData.featured ?? true,
      challenges: rawData.challenges || [],
      learnings: rawData.learnings || [],
      isPublished: rawData.isPublished !== false,
    };

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading project case study ${slug}:`, error);
    return null;
  }
}


export function getAllProjectCaseStudies(): ProjectCaseStudyPreview[] {
  const slugs = getProjectCaseStudySlugs();

  const caseStudies = slugs
    .map((slug) => {
      const caseStudy = getProjectCaseStudyBySlug(slug);
      if (!caseStudy) return null;

      return {
        slug: caseStudy.slug,
        frontmatter: caseStudy.frontmatter,
      };
    })
    .filter(
      (caseStudy): caseStudy is ProjectCaseStudyPreview => caseStudy !== null,
    )
    .sort((a, b) => {
      if (a.frontmatter.featured && !b.frontmatter.featured) return -1;
      if (!a.frontmatter.featured && b.frontmatter.featured) return 1;
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });

  return caseStudies;
}


export function getPublishedProjectCaseStudies(): ProjectCaseStudyPreview[] {
  const allCaseStudies = getAllProjectCaseStudies();
  return allCaseStudies.filter(
    (caseStudy) => caseStudy.frontmatter.isPublished,
  );
}

export function getProjectCaseStudiesByTechnology(
  technology: string,
): ProjectCaseStudyPreview[] {
  const publishedCaseStudies = getPublishedProjectCaseStudies();
  return publishedCaseStudies.filter((caseStudy) =>
    caseStudy.frontmatter.technologies.some(
      (tech) => tech.toLowerCase() === technology.toLowerCase(),
    ),
  );
}


export function getAllTechnologies(): string[] {
  const publishedCaseStudies = getPublishedProjectCaseStudies();
  const technologiesSet = new Set<string>();

  publishedCaseStudies.forEach((caseStudy) => {
    caseStudy.frontmatter.technologies.forEach((tech) => {
      technologiesSet.add(tech.toLowerCase());
    });
  });

  return Array.from(technologiesSet).sort();
}


export function getProjectNavigation(currentSlug: string): {
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
} {
  const currentProjectIndex = projects.findIndex(
    (project: Project) => project.projectDetailsPageSlug === `/projects/${currentSlug}`,
  );

  if (currentProjectIndex === -1) {
    return { previous: null, next: null };
  }

  const previousProject =
    currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null;
  const nextProject =
    currentProjectIndex < projects.length - 1
      ? projects[currentProjectIndex + 1]
      : null;

  return {
    previous: previousProject
      ? {
          title: previousProject.title,
          slug: previousProject.projectDetailsPageSlug.replace(
            '/projects/',
            '',
          ),
        }
      : null,
    next: nextProject
      ? {
          title: nextProject.title,
          slug: nextProject.projectDetailsPageSlug.replace('/projects/', ''),
        }
      : null,
  };
}


export function getRelatedProjectCaseStudies(
  currentSlug: string,
  maxProjects = 2,
): ProjectCaseStudyPreview[] {
  const currentCaseStudy = getProjectCaseStudyBySlug(currentSlug);
  if (!currentCaseStudy || !currentCaseStudy.frontmatter.isPublished) {
    return [];
  }

  const allCaseStudies = getPublishedProjectCaseStudies();
  const currentTechnologies = currentCaseStudy.frontmatter.technologies.map(
    (tech) => tech.toLowerCase(),
  );

  const caseStudiesWithScore = allCaseStudies
    .filter((caseStudy) => caseStudy.slug !== currentSlug)
    .map((caseStudy) => {
      const sharedTechnologies = caseStudy.frontmatter.technologies.filter(
        (tech) => currentTechnologies.includes(tech.toLowerCase()),
      );
      return {
        caseStudy,
        score: sharedTechnologies.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return caseStudiesWithScore
    .slice(0, maxProjects)
    .map((item) => item.caseStudy);
}
