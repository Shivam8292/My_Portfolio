import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(3, 0, 20, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99, 102, 241, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.4rem',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <Terminal size={22} style={{ color: 'var(--color-secondary)' }} />
          <span>Shivam<span style={{ color: 'var(--color-primary)' }}>.dev</span></span>
        </a>

        {/* Desktop Nav Items */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: 'var(--color-text-secondary)',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              padding: '0.5rem 1.2rem',
              fontSize: '0.9rem',
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '4.5rem',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 4.5rem)',
            background: 'rgba(3, 0, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            zIndex: 999,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1.1rem',
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Embedded CSS for responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
