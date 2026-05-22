import { Code2, Brain, Database, BarChart3 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Frontend',
      icon: <Code2 size={24} style={{ color: 'var(--color-primary)' }} />,
      skills: ['Python', 'JavaScript', 'SQL', 'C++', 'React.js', 'HTML5', 'CSS3'],
    },
    {
      title: 'AI & Backend Dev',
      icon: <Brain size={24} style={{ color: 'var(--color-secondary)' }} />,
      skills: [
        'Retrieval-Augmented Generation (RAG)',
        'LangChain / LangGraph',
        'LLM APIs (OpenAI, Gemini)',
        'FastAPI',
        'REST APIs',
        'Semantic Search',
        'Text Embeddings',
      ],
    },
    {
      title: 'Databases & Tools',
      icon: <Database size={24} style={{ color: 'var(--color-accent)' }} />,
      skills: ['ChromaDB (Vector Database)', 'Git', 'GitHub', 'PostgreSQL', 'SQLite', 'Docker (Basic)'],
    },
    {
      title: 'Data & Analytics',
      icon: <BarChart3 size={24} style={{ color: '#ec4899' }} />,
      skills: ['Pandas', 'NumPy', 'Power BI', 'Excel', 'Data Visualization', 'Statistical Analysis'],
    },
  ];

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            My toolbox spans full-stack engineering, with a strong specialization in AI integrations, vector embeddings, and data analysis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-secondary)';
                      e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.transform = 'translateY(0px)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
