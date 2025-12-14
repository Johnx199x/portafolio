import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-brand">John</h3>
            <p className="footer-title">Web Developer & Gaming Enthusiast</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Johnx199x"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/jonathan-cruz-martin-741a30268/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:jeremydev666@gmail.com"
              className="footer-link"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            Made with <Heart className="footer-heart" /> by John
          </p>
          <p className="footer-copyright">
            {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
