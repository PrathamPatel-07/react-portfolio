import { useMemo, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Button, Container, Form, Navbar, Nav, Badge } from "react-bootstrap";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Netflix Home Page",
    category: "Frontend",
    number: "01",
    description: "A streaming-inspired landing page focused on a bold hero area, clear content hierarchy, and a familiar entertainment layout.",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "UI recreation",
    link: ""
  },
  {
    id: 2,
    title: "Online Shopping Mart",
    category: "Frontend",
    number: "02",
    description: "An online shopping website concept designed to make browsing products feel simple, organised, and easy to use.",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "Web experience",
    link: ""
  },
  {
    id: 3,
    title: "Quiz Web",
    category: "JavaScript",
    number: "03",
    description: "A quiz website concept that brings questions and answer choices into a straightforward interactive flow.",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "Interactive app",
    link: ""
  }
];

const skills = [
  { name: "C", detail: "Programming fundamentals", level: "01" },
  { name: "HTML", detail: "Semantic page structure", level: "02" },
  { name: "CSS", detail: "Layouts and responsive styling", level: "03" },
  { name: "JavaScript", detail: "Logic and interactivity", level: "04" },
  { name: "ReactJS", detail: "Components, hooks and state", level: "05" },
  { name: "Bootstrap", detail: "Responsive UI components", level: "06" }
];

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const jump = (id) => {
    if (!isHome) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="lg" className="site-nav sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-mark">
          <span className="brand-icon">P</span>
          <span>pratham<span className="brand-dot">.</span></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center nav-links">
            <Nav.Link as={Link} to="/" onClick={() => isHome && jump("home")}>Home</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => isHome && jump("about")}>About</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => isHome && jump("skills")}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => isHome && jump("projects")}>Projects</Nav.Link>
            <Button as={Link} to="/contact" className="nav-contact">Let's talk <span aria-hidden="true">↗</span></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Pratham Chetan<br /><span>Patel.</span></h1>
            <div className="hero-role"><span className="role-line" /> Full Stack Web Developer</div>
            <p className="hero-description">
              A motivated, quick learner building a strong foundation in web development.
              I enjoy turning ideas into clean, useful digital experiences and learning something new with every project.
            </p>
            <div className="hero-actions">
              <Button href="#projects" className="button-primary">Explore my work <span>↘</span></Button>
              <Button as={Link} to="/contact" variant="outline-dark" className="button-secondary">Get in touch</Button>
            </div>
            <div className="hero-meta">
              <span><span className="meta-icon">⌖</span> Surat, India</span>
              <span><span className="meta-icon">⌘</span> Web development</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative developer illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card code-card">
              <div className="code-card-top"><span /><span /><span /><small>portfolio.jsx</small></div>
              <div className="code-lines">
                <p><i>01</i> <span className="code-purple">const</span> developer = {"{"}</p>
                <p><i>02</i> &nbsp; name: <span className="code-green">"Pratham"</span>,</p>
                <p><i>03</i> &nbsp; role: <span className="code-green">"Web Developer"</span>,</p>
                <p><i>04</i> &nbsp; curious: <span className="code-orange">true</span></p>
                <p><i>05</i> {"}"}</p>
                <p className="code-comment"><i>06</i> // always learning...</p>
              </div>
            </div>
            <div className="floating-chip chip-react"><span>⚛</span> ReactJS</div>
            <div className="floating-chip chip-css"><span>✳</span> CSS</div>
            <div className="floating-chip chip-js"><span>JS</span> JavaScript</div>
            <div className="art-caption"><span className="caption-square">✦</span><div><strong>Build. Learn. Repeat.</strong><small>A little better every day.</small></div></div>
          </div>
        </div>
        <div className="scroll-note"><span /> SCROLL TO EXPLORE <span>↓</span></div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className="section-block" id="about">
      <Container>
        <div className="section-heading">
          <SectionLabel> A LITTLE ABOUT ME </SectionLabel>
          <h2>Curious by nature.<br /><span>Developer in progress.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-intro">
            <div className="big-quote">“</div>
            <p>I'm Pratham, a motivated and quick learner who is passionate about building a career in the IT industry.</p>
          </div>
          <div className="about-detail">
            <p>I enjoy learning new technologies and improving my technical and problem-solving abilities. I'm building my skills one project at a time, with a focus on creating websites that are clear, responsive, and easy to use.</p>
            <p>Right now, I'm strengthening my frontend foundations with HTML, CSS, JavaScript, ReactJS, and Bootstrap while continuing to explore how full-stack applications fit together.</p>
            <div className="about-tags"><span>Problem solving</span><span>Continuous learning</span><span>Web development</span></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-block skills-section" id="skills">
      <Container>
        <div className="section-heading heading-row">
          <div><SectionLabel> MY TOOLKIT </SectionLabel><h2>Tools I use to<br /><span>bring ideas to life.</span></h2></div>
          <p className="heading-aside">A growing toolkit, built through practice, coursework, and hands-on projects.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top"><span className="skill-number">{skill.level}</span><span className="skill-arrow">↗</span></div>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
            </div>
          ))}
        </div>
        <div className="learning-note"><span className="learning-icon">✳</span><p><strong>Currently growing:</strong> React hooks, routing, state management, API integration, and responsive UI development.</p></div>
      </Container>
    </section>
  );
}

function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Frontend", "JavaScript"];
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesSearch = `${project.title} ${project.description} ${project.stack.join(" ")}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || project.category === category;
    return matchesSearch && matchesCategory;
  }), [search, category]);

  return (
    <section className="section-block projects-section" id="projects">
      <Container>
        <div className="section-heading heading-row">
          <div><SectionLabel> SELECTED WORK </SectionLabel><h2>Small projects.<br /><span>Real learning.</span></h2></div>
          <p className="heading-aside">A few projects I've worked on while learning how to build for the web.</p>
        </div>
        <div className="project-controls">
          <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search my projects..." aria-label="Search projects" />
          <div className="filter-pills" aria-label="Filter projects">
            {categories.map((item) => <button key={item} className={category === item ? "filter-pill active" : "filter-pill"} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
        </div>
        <div className="projects-list">
          {filteredProjects.map((project) => (
            <article className="project-row" key={project.id}>
              <div className="project-number">{project.number}</div>
              <div className={`project-preview preview-${project.id}`}>
                {project.id === 1 && <div className="mini-stream"><span className="mini-logo">N</span><div className="mini-screen-title">WATCH<br />SOMETHING<br />GREAT.</div><div className="mini-screen-line" /></div>}
                {project.id === 2 && <div className="mini-shop"><div className="mini-shop-head">MARKET<span>+</span></div><div className="mini-product-grid"><i /><i /><i /></div><div className="mini-shop-line" /></div>}
                {project.id === 3 && <div className="mini-quiz"><div className="quiz-mark">Q.</div><strong>Quick quiz</strong><small>Test what you know</small><div className="quiz-option" /><div className="quiz-option short" /></div>}
              </div>
              <div className="project-info">
                <div className="project-meta"><Badge bg="light" text="dark">{project.type}</Badge><span>PROJECT {project.number}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
              <div className="project-link-wrap">
                {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="round-link" aria-label={`Open ${project.title}`}>↗</a> : <span className="project-in-progress">Personal work</span>}
              </div>
            </article>
          ))}
          {filteredProjects.length === 0 && <div className="empty-state">No projects match that search. Try another keyword.</div>}
        </div>
        <p className="project-footnote">Project links can be added once the repositories or live demos are ready.</p>
      </Container>
    </section>
  );
}

function Education() {
  return (
    <section className="section-block education-section" id="education">
      <Container>
        <div className="section-heading"><SectionLabel> THE JOURNEY SO FAR </SectionLabel><h2>Learning with <span>purpose.</span></h2></div>
        <div className="education-card">
          <div className="education-mark">SP</div>
          <div><span className="education-label">EDUCATION</span><h3>Sardar Patel College of Engineering and Technology</h3><p>Building technical foundations and developing practical skills through learning and projects.</p></div>
          <span className="education-status">In progress</span>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (!formData.name.trim()) newError.name = "Please enter your name.";
    if (!formData.email.trim()) newError.email = "Please enter your email.";
    else if (!formData.email.includes("@")) newError.email = "Please enter a valid email.";
    if (!formData.message.trim()) newError.message = "Please add a short message.";
    setError(newError);
    if (Object.keys(newError).length === 0) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`);
      setSubmitted(true);
      window.location.href = `mailto:pratham17087@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section className="contact-page">
      <Container>
        <div className="contact-back"><Link to="/">← Back to portfolio</Link></div>
        <div className="contact-layout">
          <div className="contact-copy">
            <SectionLabel> GET IN TOUCH </SectionLabel>
            <h1>Have an idea?<br /><span>Let's talk.</span></h1>
            <p>Have a project idea, an opportunity, or just want to connect? Send me a message. I'd be happy to hear from you.</p>
            <a className="contact-email" href="mailto:pratham17087@gmail.com">pratham17087@gmail.com <span>↗</span></a>
            <div className="contact-socials">
              <a href="https://github.com/PrathamPatel-07" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/pratham-patel-251742384/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="contact-form-card">
            <h2>Send a message</h2>
            <p>All fields are required.</p>
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group className="mb-3"><Form.Label>Your name</Form.Label><Form.Control name="name" value={formData.name} onChange={handleChange} placeholder="Name" isInvalid={!!error.name} /><Form.Control.Feedback type="invalid">{error.name}</Form.Control.Feedback></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Email address</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" isInvalid={!!error.email} /><Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback></Form.Group>
              <Form.Group className="mb-4"><Form.Label>Message</Form.Label><Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Tell me a little about it..." isInvalid={!!error.message} /><Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback></Form.Group>
              <Button type="submit" className="button-primary w-100">Open email to send <span>↗</span></Button>
              {submitted && <p className="form-note">Your email app should open with the message filled in.</p>}
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><Container><div className="footer-inner"><Link to="/" className="footer-brand">pratham<span>.</span></Link><p>Made with curiosity and React.</p><div className="footer-links"><a href="https://github.com/PrathamPatel-07" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/pratham-patel-251742384/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:pratham17087@gmail.com">Email ↗</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Pratham Chetan Patel</span><span>Designed to keep growing.</span></div></Container></footer>;
}

function Home() {
  return <><Hero /><About /><Skills /><Projects /><Education /><section className="closing-cta"><Container><div><SectionLabel> HAVE SOMETHING IN MIND? </SectionLabel><h2>Let's make something<br /><span>useful together.</span></h2></div><Button as={Link} to="/contact" className="button-primary">Start a conversation <span>↗</span></Button></Container></section></>;
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<main className="not-found"><h1>Page not found</h1><Link to="/">Return home</Link></main>} />
      </Routes>
      <Footer />
    </div>
  );
}
