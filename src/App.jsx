// src/App.jsx
import React from 'react';

// --- Assets (adjust paths if your assets are in a different folder) ---
import profileImg from '/public/profileImg.jpg';
import Case1229 from '/public/Case1229.png';
import ForestApp from '/public/Forest-App.png';
import RatInAMaze from '/public/RatInAMaze.png';
import Sleepywear from '/public/Sleepywear.png';
import Takeover from '/public/Takeover.png';
import RESUME_PDF from '/public/RESUME.pdf';

// --- Projects data (images only) ---
const projectsData = [
  {
    title: 'Case No. 1229',
    description: 'A short horror film exploring atmosphere and suspense through visual storytelling.',
    image: Case1229,
    link: 'https://drive.google.com/file/d/1AkF1JXyVXkFWiMHFU7P3lBGDfvD-7_cj/view?usp=drive_link',
  },
  {
    title: 'Rat in a Maze',
    description: 'A conceptual student film focusing on metaphor and human emotion.',
    image: RatInAMaze,
    link: 'https://drive.google.com/file/d/12nNkAvedPsejU06k1BHXTOb2d4NOsfHG/view?usp=drive_link',
  },
  {
    title: 'Takeover',
    description: 'A creative short film showcasing narrative structure and dramatic tone.',
    image: Takeover,
    link: 'https://drive.google.com/file/d/13p4swMJjfn0q4cV6EZKitCA6aGHES5aQ/view?usp=drive_link',
  },
  {
    title: 'Forest App',
    description: 'UI/UX design for a mindfulness and productivity mobile app.',
    image: ForestApp,
  },
  {
    title: 'Sleepywear',
    description: 'Brand identity and design concept for a cozy and stylish clothing line.',
    image: Sleepywear,
  },
];

// --- Other data (unchanged) ---
const skillsData = {
  frontend: [
    { name: 'React', level: 40 },
    { name: 'CSS', level: 50 },
    { name: 'JavaScript', level: 40 },
    { name: 'HTML5', level: 50 },
    { name: 'Tailwind CSS', level: 50 },
  ],
  backend: [
    { name: 'Node.js', level: 10 },
    { name: 'Php', level: 27 },
    { name: 'Python', level: 50 },
  ],
  databases: [
    { name: 'MySQL', level: 35 },
  ],
  versionControl: [
    { name: 'Git', level: 20 },
    { name: 'GitHub', level: 27 },
  ],
  tools: ['Visual Studio Code', 'Figma'],
  other: ['Responsive Design', 'UI/UX Principles'],
  softSkills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Attention to Detail', 'Continuous Learning', 'Curiosity'],
};

const experienceData = [
  {
    title: 'Financial Manager',
    company: 'Lebl Company',
    period: '2024 - 2025',
    bullets: [
      'Managed financial planning and analysis, improving budgeting accuracy.',
    ]
  },
  {
    title: 'Ui/Ux',
    company: 'Sleepywears',
    period: '2025 - Present',
    bullets: [
      'One of the creators of Sleepywears, a clothing brand that focuses on comfortable and stylish cloths.',
    ]
  }
];

// --- Core Reusable Components ---
const Header = ({ activeSection }) => {
  return (
    <header className="header-nav">
      <nav className="nav-container">
        <div className="nav-logo">Latina, Sofia Isabel I.</div>
        <div className="nav-links">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

// --- Section Components ---
const HeroSection = () => (
  <div style={{
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
    background: 'linear-gradient(135deg, var(--color-background) 0%, #ebf5ff 100%)'
  }}>
    <p style={{ color: 'var(--color-primary)', fontSize: '1.1em', fontWeight: '500', marginBottom: '10px' }}>
      Welcome to My Portfolio
    </p>
    <h1 style={{ fontSize: '3.5em', marginBottom: '10px', color: 'var(--color-primary-dark)' }}>
      I'm Latina, Sofia Isabel I.
    </h1>
    <p style={{ maxWidth: '800px', fontSize: '1.2em', marginBottom: '40px', color: 'var(--color-text)' }}>
      A BSIS student, passionate about learning and creating things that I am and will be capable of, also improving my skills and knowledge.
    </p>
    <div style={{ display: 'flex', gap: '20px' }}>
      <a href="#projects" className="btn-primary">Explore My Work &darr;</a>
      <a href="#contact" className="btn-secondary">Get in Touch</a>
    </div>
  </div>
);

const BiographySection = () => (
  <section id="about" className="portfolio-section">
    <h2 style={{ width: '100%', textAlign: 'center' }}>About Me</h2>
    <p style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1em' }}>
      Get to know more about my background, education, and what drives my passion
    </p>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-accent)',
        border: '4px solid var(--color-card-bg)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden'
      }}>
        {/* PROFILE_IMAGE_URL replaced with imported profileImg */}
        <img
          src={profileImg}
          alt="Your Professional Profile Picture"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>

    {/* Biography Content Cards */}
    <div style={{ maxWidth: '800px', margin: '40px auto' }}>

      <div className="card">
        <h3 style={{ color: 'var(--color-primary)' }}>Who I Am</h3>
        <p>I am a BSIS student currently in 3rd year, and you will know who I am in the near future.</p>
        <p>I'm that kind of person who's hard to understand because I prefer to mind my own business and rarely open up to others that even my friends had a hard time getting to know me.</p>
      </div>

      <div className="card">
        <h3 style={{ color: 'var(--color-primary)' }}>Education</h3>
        <p><strong>Bachelor of Science in Information Systems</strong> | La Verdad Christian College | 2023 - 2027</p>
      </div>

      <div className="card">
        <h3 style={{ color: 'var(--color-primary)' }}>Hobbies & Interests</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4 style={{ color: 'var(--color-text)' }}>Personal Interests</h4>
            <ul>
              <li>Reading</li>
              <li>Watching</li>
              <li>Gaming</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-text)' }}>Creative Pursuits</h4>
            <ul>
              <li>Writing</li>
              <li>Painting</li>
              <li>Sketching</li>
              <li>Photography</li>
            </ul>
          </div>
        </div>
        <p style={{ fontSize: '0.9em', marginTop: '15px' }}>These are my ways to kill time when I'm free from school works.</p>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section
    id="projects"
    className="portfolio-section"
    style={{ backgroundColor: 'var(--color-card-bg)', padding: '60px 20px' }}
  >
    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '10px' }}>
      Featured Projects
    </h2>
    <p
      style={{
        textAlign: 'center',
        marginBottom: '60px',
        fontSize: '1.1em',
        color: 'var(--color-text)',
      }}
    >
      A selection of my recent work showcasing my skills and experience
    </p>

    {/* Projects Grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundColor: 'var(--color-bg)',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
          }}
        >
          {/* Title as a Link */}
          <h3
            style={{
              marginBottom: '10px',
              fontSize: '1.25rem',
            }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-primary)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              {project.title}
            </a>
          </h3>

          <p
            style={{
              color: 'var(--color-text)',
              marginBottom: '15px',
              lineHeight: '1.5',
            }}
          >
            {project.description}
          </p>

          {/* Image Only */}
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
              }}
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

const ProgressBar = ({ name, level }) => (
  <div style={{ marginBottom: '15px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95em', color: 'var(--color-text)' }}>
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="portfolio-section">
    <h2>Skills & Technologies</h2>
    <p style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1em' }}>
      A overview of my technical and soft skills
    </p>

    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Technical Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>&lt; / &gt; Frontend Development</h3>
          {skillsData.frontend.map(skill => <ProgressBar key={skill.name} {...skill} />)}
        </div>
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>&#123; &#125; Backend Development</h3>
          {skillsData.backend.map(skill => <ProgressBar key={skill.name} {...skill} />)}
        </div>

        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>&#128193; Databases</h3>
          {skillsData.databases.map(skill => <ProgressBar key={skill.name} {...skill} />)}
        </div>
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>&#128274; Version Control</h3>
          {skillsData.versionControl.map(skill => <ProgressBar key={skill.name} {...skill} />)}
        </div>

        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>&#128736; Tools & Technologies</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {skillsData.tools.map(tool => <span key={tool} style={{ color: 'var(--color-text)' }}>{tool}</span>)}
          </div>
        </div>
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>&#128077; Other Skills</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {skillsData.other.map(other => <span key={other} style={{ color: 'var(--color-text)' }}>{other}</span>)}
          </div>
        </div>
      </div>

      {/* Technologies I've Worked With (Badges) */}
      <div style={{ marginTop: '40px', padding: '30px 0' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--color-text-secondary)' }}>Technologies I've Worked With</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {[...skillsData.frontend.map(s => s.name), ...skillsData.backend.map(s => s.name), ...skillsData.databases.map(s => s.name)].map((tech, index) => (
            <span key={index} className="skill-badge" style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text-light)',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '0.9em'
            }}>{tech}</span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="card" style={{ marginTop: '40px' }}>
        <h3 style={{ textAlign: 'center', color: 'var(--color-text)' }}>Soft Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
          {skillsData.softSkills.map((skill, index) => (
            <span key={index} style={{
              padding: '10px 20px',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              color: 'var(--color-text)'
            }}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ResumeSection = () => (
  <section id="resume" className="portfolio-section" style={{ backgroundColor: 'var(--color-card-bg)' }}>
    <h2>Resume</h2>
    <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1em' }}>
      Download my complete professional resume
    </p>

    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <a
        href={RESUME_PDF}
        download="Resume.pdf"
        className="btn-primary"
        style={{ padding: '12px 30px' }}
      >
        &#x2193; Download PDF Resume
      </a>
    </div>

    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="card">
        <h3 style={{ color: 'var(--color-primary)' }}>&#128188; Work Experience</h3>
        {experienceData.map((job, index) => (
          <div key={index} style={{ marginBottom: '25px', borderBottom: index < experienceData.length - 1 ? '1px solid var(--color-border)' : 'none', paddingBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h4 style={{ color: 'var(--color-text)', marginBottom: '5px' }}>{job.title}</h4>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9em' }}>{job.period}</span>
            </div>
            <p style={{ margin: 0, marginBottom: '10px' }}><em>{job.company}</em></p>
            <ul>
              {job.bullets.map((bullet, i) => <li key={i} style={{ color: 'var(--color-text)' }}>{bullet}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ color: 'var(--color-primary)' }}>&#127891; Education</h3>
        <p><strong>Bachelor of Science in Information Systems, 3rd Yr</strong> | La Verdad Christian College | 2023 - 2027</p>
        <p style={{ margin: '5px 0' }}>Relevant Coursework: [Course 1], [Course 2]</p>
        <h3 style={{ color: 'var(--color-primary)', marginTop: '20px' }}>&#127941; Achievements</h3>
        <p style={{ margin: '5px 0' }}> With Honor | 2021, 2022. 2023 </p>
        <p style={{ margin: '5px 0' }}> Deans Lister | 2025 </p>
        <p style={{ margin: '5px 0' }}> Technical Writing 1st Runner Up | 2025, 8th Ict Week </p>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="portfolio-section">
    <h2>Get in Touch</h2>
    <p style={{ textAlign: 'center', marginBottom: '60px', fontSize: '1.1em' }}>
      Feel free to reach out through any of my socials below.
    </p>

    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <h3 style={{ color: 'var(--color-primary)' }}>Contact Information</h3>
          <p style={{ margin: '5px 0' }}>&#9993; sofiaisabellatina@gmail.com</p>
          <p style={{ margin: '5px 0' }}>&#9742; 09394720306</p>
          <p style={{ margin: '5px 0' }}>&#128205; Quezon City, Philippines</p>
        </div>

        <div>
          <h3 style={{ color: 'var(--color-primary)' }}>Social Links</h3>
          <p style={{ margin: '5px 0' }}>&#128374; <a href="https://www.linkedin.com/in/sofia-isabel-latina-233392301/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p style={{ margin: '5px 0' }}>&#128008; <a href="https://github.com/sofialatina" target="_blank" rel="noreferrer">GitHub</a></p>
          <p style={{ margin: '5px 0' }}>&#128033; <a href="https://www.facebook.com/sofia.isabel.isanan/" target="_blank" rel="noreferrer">Facebook</a></p>
        </div>

        <p style={{ fontSize: '0.9em', color: 'var(--color-text-secondary)' }}>
          Response Time: I typically respond within 24-48 hours during weekdays.
        </p>
      </div>
    </div>
  </section>
);

// --- Main App ---
export default function App() {
  const [activeSection, setActiveSection] = React.useState('about');

  React.useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'resume', 'contact'];
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <BiographySection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Latina. All rights reserved.</p>
        <p>Built with React and Custom CSS.</p>
      </footer>
    </>
  );
}
