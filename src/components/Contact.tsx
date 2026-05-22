import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#a855f7'],
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kshivamm1234@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind, an opportunity to discuss, or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}>
          {/* Info Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                Contact Information
              </h3>

              <div
                onClick={handleCopyEmail}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
                title="Click to copy email address"
              >
                <div
                  style={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--color-primary)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Email</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>kshivamm1234@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    background: 'rgba(6, 182, 212, 0.1)',
                    color: 'var(--color-secondary)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Phone</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>+91-8292268257</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    background: 'rgba(168, 85, 247, 0.1)',
                    color: 'var(--color-accent)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Location</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>Purnia, Bihar / Remote</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/shivamx12/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                }}
              >
                <div
                  style={{
                    background: 'rgba(6, 182, 212, 0.1)',
                    color: 'var(--color-secondary)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
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
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>LinkedIn</p>
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-secondary)' }}>shivamx12</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.8rem',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    className="form-input"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '0.8rem',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="subject" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.8rem',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.8rem',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    resize: 'vertical',
                  }}
                  className="form-input"
                />
              </div>

              {status === 'success' ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-secondary)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <CheckCircle size={20} /> Message sent successfully! I will reply soon.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '0.5rem',
                    border: 'none',
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input:focus {
          border-color: var(--color-secondary) !important;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.15);
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
