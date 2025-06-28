import React, { useState } from 'react';
// No direct CSS import here, it will be in main.jsx/index.js

// Main App component
const App = () => {
  // State to manage the current active page/section
  const [currentPage, setCurrentPage] = useState('home');

  // Helper function to render the appropriate section based on `currentPage` state
  const renderSection = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  // --- Navbar Component ---
  const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Brand/Logo - Clickable to go home */}
          <button
            onClick={() => setCurrentPage('home')}
            className="navbar-brand"
          >
            Emmanuela<span className="navbar-brand-highlight">.dev</span>
          </button>

          {/* Navigation Links */}
          <ul className="navbar-links">
            {['home', 'about', 'portfolio', 'contact'].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`navbar-link ${currentPage === page ? 'navbar-link-active' : ''}`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };

  // --- Home Section Component ---
  const Home = () => {
    return (
      <section id="home" className="home-section">
        <div className="home-background-shapes">
          <span className="shape shape-1"></span>
          <span className="shape shape-2"></span>
          <span className="shape shape-3"></span>
        </div>

        <div className="home-content">
          <h1 className="home-title">
            Hello, I'm <span className="home-title-highlight">Emmanuela</span>
          </h1>
          <p className="home-subtitle">
            A <span className="home-subtitle-highlight">Software Developer</span> & <span className="home-subtitle-highlight">Graphic Designer</span>
          </p>
          <p className="home-description">
            Building intuitive web experiences and impactful visual designs.
          </p>
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="home-cta-button"
          >
            View My Work
          </button>
        </div>
      </section>
    );
  };

  // --- About Section Component ---
  const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">
            About Me
            <span className="section-title-underline blue-underline"></span>
          </h2>

          <div className="about-content-grid">
            {/* Left Column: Image/Illustration */}
            <div className="about-image-wrapper">
              <img
                src="/images/me1.jpg" 
                alt="Your Profile"
                className="about-profile-pic"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/e2e8f0/4a5568?text=Your+Profile+Pic`; }}
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="about-text-content">
              <p>
                Hello! I'm a passionate and versatile professional with expertise in both <span className="text-highlight-blue">software development</span> and <span className="text-highlight-blue">graphic design</span>. My journey in tech began with a curiosity for building interactive web experiences, which led me to master <span className="text-highlight-green">JavaScript</span> and modern frameworks like <span className="text-highlight-blue">React.js</span>. I also have a strong foundation in <span className="text-highlight-indigo">PHP</span> for robust backend solutions.
              </p>
              <p>
                As a <span className="text-highlight-purple">freelancer</span>, I enjoy collaborating with clients to bring their visions to life, whether it's developing dynamic web applications, crafting engaging user interfaces, or designing stunning visual assets. My unique blend of coding and design skills allows me to approach projects holistically, ensuring both functionality and aesthetic appeal.
              </p>
              <p>
                I am constantly learning and adapting to new technologies to deliver high-quality, scalable, and user-centric solutions. Let's build something amazing together!
              </p>

              {/* Skills Section */}
              <div className="about-skills-section">
                <h3 className="about-skills-title">My Skills:</h3>
                <div className="about-skills-list">
                  {['JavaScript', 'React.js', 'PHP','Mysql', 'HTML5', 'CSS3', 'UI/UX Design', 'Logo Design', 'Branding', 'Canvas', 'Adobe Illustrator', 'Figma', 'Git/GitHub'].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // --- Portfolio Section Component ---
  const Portfolio = () => {
    // Dummy data for projects.
    const projects = [
      {
        id: 1,
        type: 'development',
        title: 'E-commerce Platform (PHP & MySQL)',
        description: 'Developed a robust e-commerce website from scratch, handling product management, secure user authentication, shopping cart functionality, and order processing.',
        technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Apache'],
        imageUrl: '/images/ecommerce.jpg', 
        liveLink: '#',
        githubLink: 'https://github.com/Emmanuela-dev/fashionstore1.git',
      },
      {
        id: 2,
        type: 'development',
        title: 'Agricultural Farm Management (React.js)',
        description: 'Built a modern web application for a farmer to manage crops, livestock, inventory, and weather data, providing an intuitive interface for daily operations.',
        technologies: ['React.js', 'JavaScript', 'CSS3', 'REST API Integration'],
        imageUrl: '/images/sam.jpg', 
        liveLink: 'https://greensmart-investments.vercel.app/',
        githubLink: 'https://github.com/Emmanuela-dev/bs-greensmart-farm.git',
      },
      {
        id: 3,
        type: 'design',
        title: 'Interior Design Company Website (HTML/CSS/JS)',
        description: 'Designed and developed a visually stunning and responsive website for an interior design company, showcasing their portfolio, services, and client testimonials.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        imageUrl: '/images/interior.jpg', 
        liveLink: '#',
        githubLink: 'https://github.com/Emmanuela-dev/Silpa-Interiors.git',
      },
      {
        id: 4, // Changed ID from 3 to 4 as previous 3 is now interior design
        type: 'design',
        title: 'Brand Identity Redesign',
        description: 'Comprehensive brand identity redesign for a tech startup, including logo, color palette, typography, and brand guidelines.',
        technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
        imageUrl: '/images/branding.jpg', // Path updated for public folder
      
      },
      {
        id: 5,
        type: 'development',
        title: 'Interactive Data Dashboard (React.js)',
        description: 'Created a dynamic dashboard to visualize complex datasets with interactive charts and tables, allowing users to filter and analyze information efficiently.',
        technologies: ['React.js', 'D3.js (or Chart.js)', 'Node.js (Backend)', 'API Integration'],
        imageUrl: '/images/data.jpg', // Path updated for public folder
       
      },
      {
        id: 6, // Changed ID from 5 to 6
        type: 'design',
        title: 'Mobile App UI/UX Mockups',
        description: 'Designed intuitive user interfaces and experiences for a new social media mobile application, focusing on seamless navigation and modern aesthetics.',
        technologies: ['Figma', 'Adobe XD', 'User Research'],
        imageUrl: '/images/mobile.jpg', // Path updated for public folder
       
      },
    ];

    return (
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="section-title">
            My Work
            <span className="section-title-underline purple-underline"></span>
          </h2>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="portfolio-card-image"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/e2e8f0/4a5563?text=Image+Unavailable`; }}
                />
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-description">{project.description}</p>
                  <div className="portfolio-card-tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="portfolio-card-actions">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // --- Contact Section Component ---
  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmissionMessage('');

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate 1.5 seconds delay

        console.log('Form Data Submitted:', formData);
        setSubmissionMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '' , message: '' }); // Clear form fields
      } catch (error) {
        console.error('Submission error:', error);
        setSubmissionMessage('There was an error sending your message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title contact-title">
            Get In Touch
            <span className="section-title-underline yellow-underline"></span>
          </h2>

          {/* Conditional message display */}
          {submissionMessage && (
            <div className={`form-message ${submissionMessage.includes('error') ? 'error' : 'success'}`}>
              {submissionMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input textarea"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-submit ${isSubmitting ? 'btn-disabled' : ''}`}
            >
              {isSubmitting ? 'Sending...' : ''}
              <a href="https://wa.me/+254793540542r" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-whatsapp">
  <i className="fab fa-whatsapp icon"></i>
  <span className="sr-only">Send Message</span>
</a>
            </button>
          </form>

          {/* Social Links / Direct Contact Info */}
          <div className="mt-10 text-center">
            <p className="contact-social-text">You can also find me on:</p>
            <div className="social-icons">
              {/* Replace with your actual LinkedIn link */}
              <a href="www.linkedin.com/in/
emmanuela-omondi-a7a7032b9
" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/Emmanuela-dev/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.878 8.207 11.414.6.11.817-.258.817-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.73.084-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.777.418-1.305.762-1.604-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.381 1.236-3.221-.124-.3-2.652-10.89.264-11.23 0 0 1.006-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.295-1.552 3.301-1.23 3.301-1.23 2.915 10.34 2.381 10.93 2.259 11.23.778.84 1.233 1.911 1.233 3.221 0 4.61-2.801 5.62-5.476 5.92-.42.36-.816 1.092-.816 2.2v3.259c0 .319.217.689.825.575 4.766-1.535 8.2-6.113 8.2-11.414 0-6.627-5.373-12-12-12z"/></svg>
                <span className="sr-only">GitHub</span>
              </a>
               {/* Twitter */}
              <a href="https://twitter.com/EmmanuelaOmondi" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-twitter">
                <i className="fab fa-twitter icon"></i>
                <span className="sr-only">Twitter</span>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/EmmanuelaOmondi" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram">
                <i className="fab fa-instagram icon"></i>
                <span className="sr-only">Instagram</span>
              </a>
              {/* WhatsApp */}
              {/* <a href="https://wa.me/+254793540542" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-whatsapp">
                <i className="fab fa-whatsapp icon"></i>
                <span className="sr-only">WhatsApp</span>
              </a> */}
              {/* Add Behance/Dribbble if applicable */}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // --- Footer Component ---
  // Simple footer for copyright information.
  const Footer = () => {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Emmanuela. All rights reserved.</p>
        {/* <p className="footer-text">Built with <span>React</span> and <span>Custom CSS</span>.</p> */}
      </footer>
    );
  };

  // Main App rendering
  return (
    <div className="App">
      <Navbar />
      {/* Adds padding to prevent content from being hidden behind fixed navbar */}
      <div className="main-content-wrapper">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
