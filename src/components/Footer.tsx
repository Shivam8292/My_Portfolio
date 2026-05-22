import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(99, 102, 241, 0.1)',
        padding: '3rem 0 2rem 0',
        background: 'rgba(3, 0, 20, 0.6)',
        marginTop: '4rem',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.5rem' }}>
              Shivam<span style={{ color: 'var(--color-primary)' }}>.dev</span>
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
              Building AI-powered applications & semantic search platforms.
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            {/* Custom SVG GitHub Icon */}
            <a
              href="https://github.com/Shivam8292"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              title="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* Custom SVG LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/shivamx12/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              title="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="mailto:kshivamm1234@gmail.com"
              style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p>© {new Date().getFullYear()} Shivam. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid var(--border-glow)',
              color: '#fff',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-secondary)';
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-glow)';
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
            }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
