import { useEffect, useState } from 'react';
import {
  ArrowUpRight, BriefcaseBusiness, CheckCircle2, ChevronDown, Code2, Database,
  ExternalLink, Globe2, Layers3, Mail, Menu, Monitor,
  Server, Sparkles, X, Send, Download, MapPin, Phone, Terminal, UserRound
} from 'lucide-react';
import { portfolio, images } from './data/portfolioData';


function GithubIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/></svg>;
}

function LinkedinIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.25A1.75 1.75 0 1 1 6.5 4.75a1.75 1.75 0 0 1 0 3.5ZM4.95 9.75h3.1V19h-3.1V9.75Zm4.95 0h2.97v1.26h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V19h-3.1v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27V19H9.9V9.75Z"/></svg>;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <div className="noise" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>{portfolio.name}</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['home','about','skills','experience','projects','services','contact'].map(item => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item[0].toUpperCase() + item.slice(1)}</a>
          ))}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={15}/></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="availability"><span /> Available for opportunities</div>
            <p className="kicker">Hi, I&apos;m</p>
            <h1>{portfolio.name}</h1>
            <div className="hero-role">{portfolio.role}<span>.</span></div>
            <p className="hero-text">{portfolio.tagline}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View My Work <ArrowUpRight size={18}/></a>
              <a className="btn ghost" href="#contact">Let&apos;s Connect <Mail size={18}/></a>
            </div>
            <div className="social-row">
              <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20}/></a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20}/></a>
              <a href={`mailto:${portfolio.email}`} aria-label="Email"><Mail size={20}/></a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-image-card">
              <img src={images.hero} alt="Professional presentation" />
              <div className="image-caption"><span>01</span><strong>Building &amp; presenting ideas</strong></div>
            </div>
            <div className="floating-card code-card"><Code2 size={18}/><span>Clean code<br/><b>Scalable systems</b></span></div>
            <div className="floating-card stack-card"><span className="mini-dot"/><span>MERN Stack</span></div>
          </div>
          <a className="scroll-hint" href="#about"><span>Scroll to explore</span><ChevronDown size={17}/></a>
        </section>

        <section id="about" className="section-pad about-section">
          <SectionHeading eyebrow="01 — About" title="A developer who builds with purpose." text="A quick look at the person behind the code, the work and the real-world problem solving." />
          <div className="about-grid">
            <div className="about-image-wrap reveal">
              <img src={images.about} alt="Professional work environment" />
              <div className="image-label"><span>Professional journey</span><b>01</b></div>
            </div>
            <div className="about-content reveal delay-1">
              <h3>From ideas to working products.</h3>
              <p>{portfolio.intro}</p>
              <p>I care about readable code, responsive experiences and backend systems that are practical to maintain. My goal is simple: turn requirements into software that people can actually use.</p>
              <div className="stat-grid">
                {portfolio.stats.map(stat => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad dark-section">
          <SectionHeading eyebrow="02 — Skills" title="The stack behind the work." text="A practical toolkit for building complete web products from interface to database." />
          <div className="skills-grid">
            {portfolio.skills.map((skill, index) => (
              <article className="skill-card reveal" key={skill.group}>
                <div className="skill-icon">{index === 0 ? <Monitor/> : index === 1 ? <Server/> : index === 2 ? <Database/> : <Terminal/>}</div>
                <h3>{skill.group}</h3>
                <div className="chips">{skill.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-pad">
          <SectionHeading eyebrow="03 — Experience" title="Experience that connects technology with people." text="Replace the sample entries below with your exact company names, dates and responsibilities." />
          <div className="timeline">
            {portfolio.experience.map((item, i) => (
              <article className="timeline-item reveal" key={`${item.title}-${i}`}>
                <div className="timeline-marker">0{i + 1}</div>
                <div className="timeline-body">
                  <div className="timeline-meta"><span>{item.duration}</span><span>{item.company}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <SectionHeading eyebrow="04 — Selected work" title="Projects built for real workflows." text="Show the products that best demonstrate your problem-solving, architecture and development skills." />
          <div className="projects-grid">
            {portfolio.projects.map((project, index) => (
              <article className="project-card reveal" key={project.name}>
                <div className={`project-visual project-${index + 1}`}>
                  <div className="mock-window"><div className="window-bar"><i/><i/><i/></div><div className="mock-content"><div className="mock-sidebar"/><div className="mock-main"><span/><span/><span/><div/></div></div></div>
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-body">
                  <div className="project-title-row"><h3>{project.name}</h3><a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}><ExternalLink size={18}/></a></div>
                  <p>{project.description}</p>
                  <div className="chips small">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                  <a className="text-link" href={project.github} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad gallery-section">
          <SectionHeading eyebrow="05 — Professional moments" title="A little context beyond the code." text="Your photos add personality and show the real environment behind your work." />
          <div className="gallery-grid">
            {images.gallery.map((src, index) => (
              <button className={`gallery-item gallery-${index + 1}`} key={src} onClick={() => setActiveImage(src)} aria-label="Open photo">
                <img src={src} alt="Professional moment" />
                <span>View photo <ArrowUpRight size={16}/></span>
              </button>
            ))}
          </div>
        </section>

        <section id="services" className="section-pad dark-section">
          <SectionHeading eyebrow="06 — Services" title="What I can build for you." text="Focused development services for products, teams and business workflows." />
          <div className="services-grid">
            {portfolio.services.map((service, i) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-top"><span>0{i + 1}</span><ArrowUpRight size={19}/></div>
                <Layers3 size={28}/>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <SectionHeading eyebrow="07 — Contact" title="Have an idea? Let&apos;s build it." text="Tell me what you are working on, what needs to be built or where you need help." />
          <div className="contact-grid">
            <div className="contact-info reveal">
              <a href={`mailto:${portfolio.email}`}><span><Mail size={19}/></span><div><small>Email</small><strong>{portfolio.email}</strong></div></a>
              <a href={`tel:${portfolio.phone}`}><span><Phone size={19}/></span><div><small>Phone</small><strong>{portfolio.phone}</strong></div></a>
              <div><span><MapPin size={19}/></span><div><small>Location</small><strong>{portfolio.location}</strong></div></div>
              <div className="contact-socials"><a href={portfolio.github} target="_blank" rel="noreferrer"><GithubIcon size={19}/></a><a href={portfolio.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={19}/></a></div>
            </div>
            <form className="contact-form reveal delay-1" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label></div>
              <label>Subject<input placeholder="What would you like to build?" /></label>
              <label>Message<textarea rows="5" placeholder="Tell me a little about your project..." /></label>
              <button className="btn primary" type="submit">Send Message <Send size={17}/></button>
              <small className="form-note">Connect this form to your preferred email service or backend before production.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><a className="brand" href="#home"><span className="brand-mark">&lt;/&gt;</span><span>{portfolio.name}</span></a><p>{portfolio.role}</p></div>
        <div className="footer-right"><a href="#home">Back to top <ArrowUpRight size={15}/></a><span>© {new Date().getFullYear()} {portfolio.name}</span></div>
      </footer>

      {activeImage && <div className="lightbox" onClick={() => setActiveImage(null)}><button onClick={() => setActiveImage(null)} aria-label="Close"><X size={25}/></button><img src={activeImage} alt="Expanded professional moment" onClick={e => e.stopPropagation()} /></div>}
    </div>
  );
}

export default App;
