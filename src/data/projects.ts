import type { Project } from '../types';
import MoneyHeroImg from '../assets/ProjectsMockup/MoneyHero.png'
import mhp3rdMockup from '../assets/ProjectsMockup/mhp3rd.png'

export const projects: Project[] = [
  {
    id: 'money-hero',
    title: 'MoneyHero',
    description: 'Modern personal finance management application with intuitive UI for tracking expenses and income.',
    fullDescription: 'MoneyHero is a comprehensive full-stack personal finance management application designed to help users take control of their financial health. The application features a modern, responsive interface built with React and TypeScript on the frontend, providing an intuitive user experience for tracking daily expenses, managing income sources, and visualizing financial data through interactive charts and reports.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    links: {
      frontend: 'https://github.com/Johnx199x/MoneyHero-fronted',
      backend: 'https://github.com/Johnx199x/money-hero-backend',
      demo:'https://money-hero-nine.vercel.app/'

    },
    isPrivate: false,
    category: 'Full Stack',
    image: MoneyHeroImg,
    highlights: [
      'Real-time expense tracking with categorization',
      'Interactive data visualization with charts',
      'RESTful API with authentication and authorization',
      'Responsive design for mobile and desktop',
      'PostgreSQL database with Sequelize ORM'
    ],
  },
  {
    id: 'mhp3rd-database',
    title: 'MHP3rd Database',
    description: 'Monster Hunter Portable 3rd game database with complete quest, monster, and equipment data.',
    fullDescription: 'MHP3rd Database is a specialized web application dedicated to Monster Hunter Portable 3rd, featuring a complete and searchable database of quests and  monsters. Built with React and JavaScript, this application provides an intuitive interface for players to quickly find game information, plan their hunts, and optimize their equipment builds.',
    technologies: ['JavaScript', 'React', 'Database Integration'],
    links: {
      github: 'https://github.com/Johnx199x/MHP3rd-DataBase',
      demo:'https://mhp3rd-database.vercel.app/'
    },
    isPrivate: false,
    category: 'Frontend',
    image:mhp3rdMockup,
    highlights: [
      'Interactive search and filtering system',
      'Detailed equipment and monster statistics',
      'Quest tracking and planning features',
      'Responsive design for mobile gaming',
      'Fast client-side data processing'
    ],
  }
];