export type ProjectCategory = 'Frontend' | 'Backend' | 'Database' | 'Full Stack';

export interface ProjectLinks {
  frontend?: string;
  backend?: string;
  demo?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string; // Descripción extendida para el modal
  technologies: string[];
  links: ProjectLinks;
  isPrivate: boolean;
  category: ProjectCategory;
  image?: string;
  highlights?: string[];
}

export interface ISkill {
  name: string;
  icon: string;
}

export interface ISkillCategory {
  title: string;
  skills: ISkill[];
}