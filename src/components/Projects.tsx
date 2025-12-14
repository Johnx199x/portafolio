import { Github, Lock, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import '../styles/proyects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            Featured Projects
          </h2>
          <p className="projects-subtitle">
            A selection of my recent work
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-content">
                <div className="project-header">
                  <div className="project-title-wrapper">
                    <div className="project-title-row">
                      <h3 className="project-title">
                        {project.title}
                      </h3>
                      {project.isPrivate && (
                        <Lock className="project-private-icon" />
                      )}
                    </div>
                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github />
                  <span className="project-link-text">View on GitHub</span>
                  <ExternalLink className="project-link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
