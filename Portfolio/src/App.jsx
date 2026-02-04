import React, { useState, useEffect } from 'react';
import { 
  User, Code, Briefcase, Mail, Download, ExternalLink, 
  Github, Linkedin, ChevronRight, Menu, X, Sun, Moon, Database
} from 'lucide-react';

/**
 * ARNAV BHOITE - PERSONAL PORTFOLIO
 * Features: Dark/Light Mode, Responsive Design, Internship Projects Showcase
 * Built with: React, JavaScript, Custom CSS
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize Theme and Scroll Listeners
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const skills = [
    { 
      category: "Frontend", 
      icon: <Code size={20} />, 
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vite"] 
    },
    { 
      category: "Backend & Services", 
      icon: <Database size={20} />, 
      items: ["Node.js", "Firebase", "Firestore", "JSON"] 
    },
    { 
      category: "Tools & Others", 
      icon: <Briefcase size={20} />, 
      items: ["Git", "GitHub", "VS Code", "Firebase Console", "Chrome DevTools"] 
    }
  ];

  const projects = [
    {
      title: "Sparkflow 🧩",
      description: "Web-based task management application developed during my internship to organize, track, and update assigned tasks in an efficient workflow.",
      tech: ["React", "JavaScript", "Firebase", "Git"],
      link: "#",
      image: "⚡"
    },
    {
      title: "ContactVault 📇",
      description: "Contact management system allowing users to store and manage contact information using a clean frontend connected to cloud storage.",
      tech: ["HTML", "CSS", "JS", "Firebase", "Git"],
      link: "#",
      image: "🔒"
    },
    {
      title: "BlogFlow 📝",
      description: "Responsive blogging web application created during my internship to display and manage blog content with reusable UI components.",
      tech: ["React", "JavaScript", "Firebase", "Git"],
      link: "#",
      image: "✍️"
    }
  ];

  const handleDownloadResume = () => {
    alert("Arnav_Bhoite_Resume.pdf download started! (Simulated)");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out, Arnav will get back to you soon!");
    e.target.reset();
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <style>{`
        :root {
          /* Theme Variables */
          --primary: #2563eb;
          --primary-dark: #1d4ed8;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .dark-theme {
          --bg-body: #0f172a;
          --bg-card: #1e293b;
          --text-main: #f8fafc;
          --text-muted: #94a3b8;
          --border: #334155;
          --nav-bg: rgba(15, 23, 42, 0.95);
        }

        .light-theme {
          --bg-body: #f8fafc;
          --bg-card: #ffffff;
          --text-main: #1e293b;
          --text-muted: #64748b;
          --border: #e2e8f0;
          --nav-bg: rgba(255, 255, 255, 0.95);
        }

        /* Essential Global Fixes */
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
        }

        .portfolio-container {
          min-height: 100vh;
          background-color: var(--bg-body);
          color: var(--text-main);
          font-family: 'Inter', system-ui, sans-serif;
          transition: background-color 0.3s ease;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Nav */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          z-index: 1000;
          background: transparent;
          transition: var(--transition);
        }

        nav.scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          height: 70px;
          box-shadow: var(--shadow);
          border-bottom: 1px solid var(--border);
        }

        .logo {
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--primary);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-main);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--primary);
        }

        .theme-toggle {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-main);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .theme-toggle:hover {
          border-color: var(--primary);
          transform: scale(1.05);
        }

        /* Hero */
        #home {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding-top: 80px;
        }

        .hero-tag {
          color: var(--primary);
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-desc {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 800px;
          margin-bottom: 2.5rem;
        }

        /* Buttons */
        .btn {
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }

        .btn-outline:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
        }

        /* Sections General */
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .section-subtitle {
          color: var(--text-muted);
          text-align: center;
          margin-bottom: 4rem;
          font-size: 1.1rem;
        }

        /* About Grid */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .about-img-box {
          background: var(--bg-card);
          aspect-ratio: 1;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-text h3 { font-size: 1.8rem; margin-bottom: 1rem; }
        .about-text p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.05rem; }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: var(--bg-card);
          padding: 35px;
          border-radius: 20px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          color: var(--primary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tag {
          background: rgba(37, 99, 235, 0.1);
          color: var(--text-main);
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--bg-card);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }

        .project-img {
          height: 200px;
          background: linear-gradient(135deg, var(--bg-card), var(--primary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          opacity: 0.9;
        }

        .project-content { padding: 30px; }
        .project-content h3 { margin-bottom: 12px; }
        .project-content p { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; min-height: 70px; }

        .tech-list { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 25px; }
        .tech-item { font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px; }

        /* Contact */
        .contact-box {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 50px;
          background: var(--bg-card);
          padding: 50px;
          border-radius: 30px;
          border: 1px solid var(--border);
        }

        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-muted); }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 14px;
          background: var(--bg-body);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text-main);
          font-family: inherit;
        }

        .mobile-menu-btn { display: none; }

        @media (max-width: 968px) {
          .nav-links, .nav-right .btn-outline { display: none; }
          .mobile-menu-btn { display: flex; }
          .about-grid, .contact-box { grid-template-columns: 1fr; }
          .contact-box { padding: 30px; }
          section { padding: 60px 20px; }
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: var(--bg-body);
          z-index: 2000;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          transform: translateY(-100%);
          transition: var(--transition);
        }

        .mobile-overlay.open { transform: translateY(0); }
      `}</style>

      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="logo">Arnavb.tech</a>
        
        <div className="nav-right">
          <div className="nav-links">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={link.href} 
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="btn btn-outline" style={{ padding: '10px 20px' }} onClick={handleDownloadResume}>
            Resume
          </button>

          <button className="mobile-menu-btn theme-toggle" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <X size={32} className="close-btn" style={{ alignSelf: 'flex-end', cursor: 'pointer' }} onClick={toggleMenu} />
        {navLinks.map(link => (
          <a key={link.id} href={link.href} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'var(--text-main)', fontWeight: '700' }} onClick={toggleMenu}>
            {link.name}
          </a>
        ))}
        <button className="btn btn-primary" onClick={() => { toggleMenu(); handleDownloadResume(); }}>
          Download Resume
        </button>
      </div>

      {/* Hero Section */}
      <section id="home">
        <p className="hero-tag">Hello, World!</p>
        <h1>I'm <span style={{ color: 'var(--primary)' }}>Arnav Bhoite</span></h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 600 }}>Web Developer (React • Node • Firebase)</h2>
        <p className="hero-desc">Building real-world web applications with React and Node focused on performance, clean structure, and practical user needs.</p>
        <div className="btn-group" style={{ display: 'flex', gap: '20px' }}>
          <a href="#projects" className="btn btn-primary">My Work <ChevronRight size={18} /></a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Student, Developer, and Continuous Learner</p>
        <div className="about-grid">
          <div className="about-img-box">
            <img src="/profile.jpg" alt="Arnav Bhoite" className="about-img" />
          </div>
          <div className="about-text">
            <h3>Bridging Code and Performance</h3>
            <p>I’m a third-year B.E. Computer Engineering student at RMD Sinhgad College of Engineering. Currently, I’m working as a Web Development Intern building real-world features.</p>
            <p>My toolkit includes React, Node.js, and Firebase. I’m also actively learning Python and exploring AI-related domains. I focus on writing clean, performance-conscious code that solves real problems.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="https://github.com/Arnav-Bhoite-1645" target="_blank" className="theme-toggle"><Github /></a>
              <a href="#" className="theme-toggle"><Linkedin /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">The tech stack I use to bring ideas to life.</p>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={i} className="skill-card">
              <div className="skill-header">
                {group.icon}
                <h3>{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item, j) => (
                  <span key={j} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Real-world applications built during my internship journey.</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-img">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-item">{t} {j < project.tech.length - 1 ? '•' : ''}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Have a project in mind or just want to chat?</p>
        <div className="contact-box">
          <div>
            <h3>Contact Information</h3>
            <p style={{ margin: '20px 0 40px', color: 'var(--text-muted)' }}>Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <div className="theme-toggle" style={{ background: 'var(--primary)', color: 'white' }}><Mail size={18} /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email me at</p>
                <p style={{ fontWeight: 600 }}>bhoitearnav1645@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="theme-toggle" style={{ background: 'var(--primary)', color: 'white' }}><User size={18} /></div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</p>
                <p style={{ fontWeight: 600 }}>Pune, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Hi Arnav, I'd like to talk about..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <a href="https://github.com/Arnav-Bhoite-1645" className="theme-toggle"><Github size={20} /></a>
          <a href="mailto:bhoitearnav1645@gmail.com" className="theme-toggle"><Mail size={20} /></a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Arnav Bhoite. All rights reserved.
        </p>
        <p style={{ color: 'var(--primary)', fontWeight: '700', marginTop: '10px', fontSize: '0.8rem' }}>
          ARNAVB.TECH
        </p>
      </footer>
    </div>
  );
};

export default App;