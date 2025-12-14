import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <button
            onClick={() => scrollToSection('hero')}
            className="navbar-logo"
          >
            <Code2 className="navbar-logo-icon" />
            <span>John Dev</span>
          </button>

          <div className="navbar-menu">
            <button
              onClick={() => scrollToSection('projects')}
              className="navbar-menu-button"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="navbar-menu-button"
            >
              Technologies
            </button>
            <a
              href="https://github.com/Johnx199x"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
            >
              GitHub
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            <button
              onClick={() => scrollToSection('projects')}
              className="navbar-mobile-button"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="navbar-mobile-button"
            >
              Technologies
            </button>
            <a
              href="https://github.com/Johnx199x"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-mobile-cta"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
