import { NavLink } from 'react-router-dom';
import './Navbar.css';

function ThemeToggle() {
  function getInitial(): 'dark' | 'light' {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const [theme, setTheme] = React.useState<'dark' | 'light'>(getInitial);
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <button className="theme-toggle" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}

export function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav">
        <div className="brand">Yusuf</div>
        <ul className="menu">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}


