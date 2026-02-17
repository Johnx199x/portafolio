import { Code, Server, Database, Layers } from 'lucide-react';
import { skillsData } from '../data/skills';
import type { ISkillCategory } from '../types/index';
import '../styles/skills.css';
import type { JSX } from 'react';

const categoryIcons: Record<string, JSX.Element> = {
  Frontend: <Code />,
  Backend: <Server />,
  Database: <Database />,
  'Development Tools': <Layers />
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
    
        <div className="skills-header">
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-subtitle">
            Tools and technologies I work with
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category: ISkillCategory) => (
            <div key={category.title} className="skill-card">
              <div className="skills-grid-card-header">
              <span className="skill-icon">
                {categoryIcons[category.title]}
              </span>

              <h3 className="skill-title">{category.title}</h3>
            </div>
              <ul className="skill-list">
                {category.skills.map(skill => (
                  <li key={skill.name} className="skill-item">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-svg"
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  );
}
