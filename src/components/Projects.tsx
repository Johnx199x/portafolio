// src/components/Projects.tsx
import { useState } from 'react';
import { Lock, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';
import '../styles/proyects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <>
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Featured Projects</h2>
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
                        <h3 className="project-title">{project.title}</h3>
                        {project.isPrivate && (
                          <Lock className="project-private-icon" />
                        )}
                      </div>
                      <span className="project-category">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-list">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="project-tech">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="project-tech project-tech-more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="project-link project-view-details"
                  >
                    <Eye />
                    <span className="project-link-text">View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}