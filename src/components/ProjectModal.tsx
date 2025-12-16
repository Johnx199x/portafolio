import { X, Github, ExternalLink, Code2, Server, Database } from 'lucide-react';
import type { Project } from '../types';
import '../styles/modal.css';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons = {
  'Frontend': <Code2 className="category-icon" />,
  'Backend': <Server className="category-icon" />,
  'Database': <Database className="category-icon" />,
  'Full Stack': (
    <>
      <Code2 className="category-icon" />
      <Server className="category-icon" />
    </>
  )
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {

 useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button 
          onClick={onClose} 
          className="modal-close"
          aria-label="Close modal"
        >
          <X />
        </button>

        <div className="modal-header">
          <div className="modal-title-wrapper">
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-category">
              {categoryIcons[project.category]}
              <span>{project.category}</span>
            </div>
          </div>
        </div>
        {project.image && (
          <div className="modal-image-container">
            <img 
              src={project.image} 
              alt={`${project.title} preview`}
              className="modal-image"
            />
          </div>
        )}

        <div className="modal-body">
          <section className="modal-section">
            <h3 className="modal-section-title">About</h3>
            <p className="modal-description">{project.fullDescription}</p>
          </section>

          {project.highlights && project.highlights.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <ul className="modal-highlights">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="modal-highlight-item">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="modal-section">
            <h3 className="modal-section-title">Technologies</h3>
            <div className="modal-tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <section className="modal-section modal-links-section">
            <h3 className="modal-section-title">Links</h3>
            <div className="modal-links">
              {project.links.frontend && (
                <a
                  href={project.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link-frontend"
                >
                  <Github />
                  <span>Frontend Repository</span>
                  <ExternalLink className="modal-link-icon" />
                </a>
              )}

              {project.links.backend && (
                <a
                  href={project.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link-backend"
                >
                  <Github />
                  <span>Backend Repository</span>
                  <ExternalLink className="modal-link-icon" />
                </a>
              )}

              {project.links.github && !project.links.frontend && !project.links.backend && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link-github"
                >
                  <Github />
                  <span>View Repository</span>
                  <ExternalLink className="modal-link-icon" />
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link-demo"
                >
                  <ExternalLink />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}