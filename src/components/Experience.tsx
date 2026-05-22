import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'AI Developer Intern',
      company: 'EOXS',
      location: 'Remote',
      period: 'Oct 2025 - Dec 2025',
      details: [
        'Worked on AI-powered ERP automation workflows for business process optimization in the steel industry.',
        'Built and tested REST APIs using Python and FastAPI for internal AI-driven features.',
        'Assisted in data processing, reporting, and workflow automation tasks for operational analytics.',
        'Collaborated with developers to integrate AI-based functionalities into enterprise applications.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.E. (Hons.) Computer Science Engineering (AI & ML)',
      institution: 'Chandigarh University',
      location: 'Punjab, India',
      period: '2022 - 2026',
      grade: 'CGPA: 7.88 / 10',
    },
    {
      degree: 'Senior Secondary (Class 12)',
      institution: 'Millia Convent School',
      location: 'Purnia, Bihar',
      period: '2019 - 2020',
      grade: 'Percentage: 88%',
    },
  ];

  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
            My <span className="text-gradient">Journey</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Professional experience and academic milestones that shaped my software engineering career.
          </p>
        </div>

        <div className="journey-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Work Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div
                style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  padding: '0.6rem',
                  borderRadius: '12px',
                  color: 'var(--color-primary)',
                  border: '1px solid var(--border-glow)',
                }}
              >
                <Briefcase size={24} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>Work Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card journey-card">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>{exp.title}</h4>
                      <p style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        fontSize: '0.85rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} style={{ marginBottom: '0.5rem' }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div
                style={{
                  background: 'rgba(6, 182, 212, 0.1)',
                  padding: '0.6rem',
                  borderRadius: '12px',
                  color: 'var(--color-secondary)',
                  border: '1px solid var(--border-glow)',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card journey-card">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{edu.degree}</h4>
                      <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {edu.institution}
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        fontSize: '0.85rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={12} /> {edu.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={12} /> {edu.location}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-secondary)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      display: 'inline-block',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                    }}
                  >
                    {edu.grade}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
