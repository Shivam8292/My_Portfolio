import { ArrowRight, Cpu } from 'lucide-react';
import AvatarCanvas from './AvatarCanvas';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid var(--border-glow)',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                width: 'fit-content',
              }}
            >
              <Cpu size={16} style={{ color: 'var(--color-secondary)' }} />
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                AI Developer & Full-Stack Engineer
              </span>
            </div>

            <h1
              style={{
                fontSize: '3.8rem',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#fff',
              }}
            >
              Hi, I am <span className="text-gradient">Shivam</span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                maxWidth: '540px',
              }}
            >
              Focused on building **RAG-based applications**, **semantic search systems**, and AI-integrated products using **FastAPI**, **React**, **LangChain**, and **LLM APIs**.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </div>

            {/* Quick Stats / Achievements */}
            <div
              style={{
                display: 'flex',
                gap: '2.5rem',
                marginTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '2rem',
              }}
            >
              <div>
                <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>5+</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>
                  AI Projects Built
                </p>
              </div>
              <div>
                <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>RAG</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>
                  Vector Semantic Search
                </p>
              </div>
              <div>
                <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>FastAPI</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>
                  High-Performance APIs
                </p>
              </div>
            </div>
          </div>

          {/* 3D Canvas Visuals */}
          <div style={{ position: 'relative' }} className="hero-canvas-container">
            {/* Interactive floating card for visual wow factor */}
            <div
              className="float-animation"
              style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                background: 'rgba(3, 0, 20, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-glow-hover)',
                borderRadius: '12px',
                padding: '0.6rem 1rem',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 32px 0 rgba(6, 182, 212, 0.15)',
              }}
            >
              <div className="glow-point" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                AI Intern @ EOXS
              </span>
            </div>

            <AvatarCanvas />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .hero-grid > div {
            align-items: center;
            margin: 0 auto;
          }
          .hero-canvas-container {
            width: 100%;
            max-width: 500px;
          }
        }
        @media (max-width: 576px) {
          h1 {
            font-size: 2.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
