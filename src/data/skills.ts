import reactIcon from '../assets/icons/react_dark.svg';
import tsIcon from '../assets/icons/typescript.svg';
import jsIcon from '../assets/icons/javascript.svg';
import htmlIcon from '../assets/icons/html5.svg';
import cssIcon from '../assets/icons/css_old.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import expressIcon from '../assets/icons/expressjs_dark.svg';
import sequelizeIcon from '../assets/icons/sequelize.svg';
import postgresIcon from '../assets/icons/postgresql.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github_dark.svg';

export interface ISkill {
  name: string;
  icon: string;
}

export interface ISkillCategory {
  title: string;
  skills: ISkill[];
}



export const skillsData:ISkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: reactIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Express', icon: expressIcon },
      { name: 'Sequelize', icon: sequelizeIcon }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: postgresIcon }
    ]
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
    ]
  }
];
