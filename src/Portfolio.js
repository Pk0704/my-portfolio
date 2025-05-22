import React, { useState, useEffect } from 'react';
import './App.css';
import ExperienceSection from './components/ExperienceSection';

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
      title: 'UrbanFlow AI Visualizer',
      description:
        'A real-time, interactive 3D traffic congestion dashboard utilizing AI agents and live weather and air-quality API feeds',
      image:'/images/TrafficFlow.png',
      technologies: ['Python - Streamlit', 'Folium', 'Polars', 'LangChain'],
      link: 'https://github.com/Pk0704/nyc-congestion-visualizer',
    },
    {
      id: 2,
      title: 'Real-Time Market Forecasting',
      image: '/images/TimeSeries.png',
      description:
        'Sophisticated market prediction system, incorporating 79 features and analyzing over 4.5 million data points to forecast financial market movements',
      technologies: ['Python - LightGBM, Ridge Regression'],
      link: 'https://github.com/Pk0704/Market_Data_Forecasting-Pk-Tp',
    },
    {
      id: 3,
      title: 'Automated Generation Tool',
      description: 'A content generation tool to create dynamic and stylistically varied stories, poems, and journals, integrating a reinforcement learning framework to enhance content quality',
      image: '/images/RL.png',
      technologies: ['PyTorch', 'Q-Network', 'TF-IDF vectorization'],
      link: 'https://github.com/Pk0704/AutomationTool',
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
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
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
          <a href="#experience">Experience</a>
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
            Hey, I'm <span className="accent">Peter</span>
          </h1>

            <p className="hero-subtitle">Math &amp; Data science</p>
            <div className="hero-actions">
              <a href="https://github.com/Pk0704?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">
                View My Work
              </a>
              <a href="mailto:pp.kaloev@yahoo.com" className="btn-outline">
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
                src="/images/profile.jpg"
                alt="Peter Kaloev"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="about-text">
              <p>
                My name is Peter! I was born in Russia, but grew up in the UK for 13 years of my life and now live in
                New York City, where I am a senior at NYU majoring in mathematics
                and data science. I love statistics, machine learning, data
                science, software development, and AI safety.
              </p>
              <p>
                In my free time, I train jiu-jitsu (3 years and counting!), cook, play poker, and read
                political theory and research papers about AI Safety (Alignment & Interpretability).
              </p>
              <div className="skills">
                {['Python', 'Java', 'SQL', 'C++', 'React.js', 'JavaScript', 'R'].map(
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
        {/* Experience slider */}
        <ExperienceSection />
        {/* Projects section */}
        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
                If you want to work on a project, or just want to connect, feel free to reach out! I’m always open to discussing new opportunities!
              </p>
              <ul>
                <li>Email: pp.kaloev@yahoo.com</li>
                <li>Phone: +1 (646) 856‑7477</li>
                <li>Location: New York City, NY</li>
              </ul>
              <div className="social-links">
                <a href="https://github.com/pk0704">GitHub</a>
                <a href="https://www.linkedin.com/in/peterkaloev/">LinkedIn</a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <label>
                  Name
                  <input type="text" placeholder="John Smith" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="John.Smith@example.com" />
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
          <div className="footer-brand">Made with care by Peter Kaloev</div>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
