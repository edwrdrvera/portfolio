import "./App.css";

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
            <a href="mailto:earivera.dev@outlook.com" className="contact-link">
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
    </>
  );
}

export default App;
