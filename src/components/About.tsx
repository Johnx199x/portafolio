import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Hi! I'm John, a web developer with a strong focus on frontend development and a growing interest in building complete, scalable web solutions.
          </p>

          <p className="about-text">
            I focus on building clean, responsive, and user-centered interfaces using React, TypeScript, and modern CSS practices. I enjoy turning ideas and designs into functional products that prioritize usability, performance, and maintainability.
          </p>

          <p className="about-text">
            On the backend side, I’m actively expanding my skills with Node.js, Express, Sequelize, and RESTful API design, aiming to better understand system architecture and data flow in full-stack applications.
          </p>

          <p className="about-text">
            Beyond development, I have experience working on technical research related to small language models (SLMs) and sustainability. This background has strengthened my analytical thinking, documentation skills, and structured problem-solving approach.
          </p>

          <p className="about-text">
            I’m always interested in learning new technologies, improving code quality, and collaborating on meaningful projects—especially those that combine solid engineering with real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
