import { useEffect, useState } from 'react';
import './Navbar.css';

function ThemeToggle() {
  function getInitial(): 'dark' | 'light' {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitial);
  useEffect(() => {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav">
        

        <ThemeToggle />
      </nav>
    </header>
  );
}
/* Eğerki menü oluşturmak istiyorsanız aşşağıdaki yapıyı 30. satıra yapıştırınız. */
/*

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      
        <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#minimalistportfolio" onClick={() => setIsMenuOpen(false)}>MinimalistPortfolio</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul> 

        */