export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  isPrivate: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'money-hero-frontend',
    title: 'MoneyHero Frontend',
    description: 'Modern personal finance management application with intuitive UI for tracking expenses and income.',
    technologies: ['TypeScript', 'React'],
    github: 'https://github.com/Johnx199x/MoneyHero-fronted',
    isPrivate: false,
    category: 'Frontend'
  },
  {
    id: 'money-hero-backend',
    title: 'Money Hero Backend',
    description: 'RESTful API for personal finance management with advanced analytics and reporting features.',
    technologies: ['TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/Johnx199x/money-hero-backend',
    isPrivate: false,
    category: 'Backend'
  },
  {
    id: 'monster-hunter-db',
    title: 'Monster Hunter DB',
    description: 'Comprehensive database for Monster Hunter game series with detailed monster, weapon, and armor information.',
    technologies: ['Database', 'SQL'],
    github: 'https://github.com/Johnx199x/monster-hunter-DB',
    isPrivate: false,
    category: 'Database'
  },
  {
    id: 'mhp3rd-database',
    title: 'MHP3rd Database',
    description: 'Monster Hunter Portable 3rd game database with complete quest, monster, and equipment data.',
    technologies: ['JavaScript', 'React','Database'],
    github: 'https://github.com/Johnx199x/MHP3rd-DataBase',
    isPrivate: false,
    category: 'Database'
  }
];
