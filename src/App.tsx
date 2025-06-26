import "./App.css";
import TechStackIcons from "./techStack";

interface Project {
    id: number;
    title: string;
    year: string;
    technologies: string;
    image: string;
    link: string;
}

interface ProjectCardProps {
    projects: Project[];
}
const projectData: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        year: "2025",
        technologies: "React, TSX, HTML, CSS",
        image: "src/assets/images/portfolio.png",
        link: "https://github.com/edwrdrvera/portfolio",
    },
    {
        id: 2,
        title: "Pokelog API",
        year: "2025",
        technologies: "Typescript, Node.js, Express",
        image: "src/assets/images/pokelog.png",
        link: "https://github.com/edwrdrvera/capstone-project",
    },
];

function IntroSection() {
    return (
        <div className="intro-section">
            <div className="subtle-text">/yooh·ko·su/ /ようこそ/</div>
            <h1 className="greeting">Hello there, ようこそ!</h1>
        </div>
    );
}
function BioSection() {
    return (
        <div className="bio-section">
            <p className="bio-text">
                Edward is a Full Stack Developer currently studying Application
                Development and Delivery at Red River College Polytechnic to
                build a strong foundation in creating and deploying modern web
                applications. He is currently expanding his front-end
                capabilities by learning frameworks like React and is eager to
                apply this, along with his skills in API development and agile
                methodologies, to personal projects this summer.
            </p>
        </div>
    );
}
function ProjectCard({ projects }: ProjectCardProps) {
    return (
        <section className="projects-section">
            <h2 className="page-title">PROJECTS</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-custom-link"
                    >
                        <article className="project-card">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="project-info">
                                <div className="title-year-container">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <time className="project-year">
                                        {project.year}
                                    </time>
                                </div>
                                <p className="project-subtitle">
                                    {project.technologies}
                                </p>
                            </div>
                        </article>
                    </a>
                ))}
            </div>
        </section>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <h1 className="logo">
                <a href="/">エドワード</a>
            </h1>

            <nav className="sidebar-nav">
                <div className="nav-links">
                    <a href="/about">About</a>
                    <a href="/cv">CV</a>
                </div>

                <div className="contact-section">
                    <h3 className="contact-header">Contact</h3>
                    <div className="contact-links">
                        <a
                            href="https://github.com/edwrdrvera"
                            className="contact-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/edward-rivera-e1213"
                            className="contact-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:earivera.dev@outlook.com"
                            className="contact-link"
                        >
                            Mail
                        </a>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

function App() {
    return (
        <>
            <Sidebar />
            <main className="main-content">
                <IntroSection />
                <BioSection />
                <ProjectCard projects={projectData} />
                <TechStackIcons />
            </main>
        </>
    );
}

export default App;
