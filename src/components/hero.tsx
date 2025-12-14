import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-icon">
          <Code2 />
        </div>

        <h1 className="hero-title">
          Hello! I'm John
        </h1>

        <p className="hero-subtitle">
          Web Developer & Gaming Enthusiast
        </p>

        <p className="hero-description">
          Passionate about frontend development with React and expanding into backend development
          with Node.js, Express, Sequelize and TypeScript.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Johnx199x"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-secondary"
          >
            <Github />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:jeremydev666@gmail.com"
            className="hero-button hero-button-primary"
          >
            <Mail />
            <span>Contacto</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jonathan-cruz-martin-741a30268/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-info"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
