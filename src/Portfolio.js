import React, { useState, useEffect } from 'react';
import './App.css';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'MTA with AI Agent',
      description:
        'A full-stack e-commerce solution with React frontend and Node.js backend.',
      technologies: ['Python - Streamlit'],
      link: '#',
    },
    {
      id: 2,
      title: 'Real - Time Market Forecasting',
      description:
        'Web app that uses AI to generate creative content for marketers.',
      technologies: ['Python - LightGBM, Ridge Regression'],
      link: '#',
    },
    {
      id: 3,
      title: 'Automated Generation Tool',
      description: 'Q-network.',
      technologies: ['PyTorch', 'D3.js', 'Firebase', 'Material UI'],
      link: '#',
    },
  ];

  return (
    <div className="portfolio">
      {/* mouse-follower */}
      <div
        className="mouse-follower"
        style={{
          width: '300px',
          height: '300px',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* site header */}
      <header className="site-header">
        <div className="site-title">Peter Kaloev</div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* mobile nav */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </nav>
      )}

      <main>
        {/* Hero section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="accent">Hello, </span>I'm Peter
            </h1>
            <p className="hero-subtitle">Math &amp; DS</p>
            <div className="hero-actions">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="profile-pic">
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
              />
            </div>
            <div className="about-text">
              <p>
                Hey, I'm Peter! I grew up in the UK for 13 years and now live in
                New York City as a rising senior at NYU majoring in mathematics
                and data science. I love statistics, machine learning, data
                science, software development, and AI safety.
              </p>
              <p>
                In my free time I train jiu-jitsu, cook, play poker, and read
                political theory.
              </p>
              <div className="skills">
                {['Python', 'Java', 'SQL', 'C++', 'React.js', 'JavaScript'].map(
                  (skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img
                    src={`/api/placeholder/600/300?text=${encodeURIComponent(
                      project.title
                    )}`}
                    alt={project.title}
                  />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="link-button">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                Feel free to reach out! I’m always open to discussing new
                projects, creative ideas, or opportunities.
              </p>
              <ul>
                <li>Email: pp.kaloev@yahoo.com</li>
                <li>Phone: +1 (646) 856‑7477</li>
                <li>Location: New York City, NY</li>
              </ul>
              <div className="social-links">
                <a href="https://github.com/pk0704">GitHub</a>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://twitter.com">Twitter</a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <label>
                  Name
                  <input type="text" placeholder="Peter Kaloev" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="pp.kaloev@yahoo.com" />
                </label>
                <label>
                  Message
                  <textarea rows="5" placeholder="Your message here…" />
                </label>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">Peter Kaloev</div>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
