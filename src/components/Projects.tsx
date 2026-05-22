import { Search, UserCheck, ShieldAlert, BrainCircuit, FileText } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      title: 'Reposage',
      subtitle: 'AI-Powered Code Search Engine',
      description: 'A semantic code search engine that indexes GitHub repositories and returns exact file paths and line numbers for natural language queries. Powered by AST-based function-level chunking and ChromaDB.',
      tech: ['React', 'FastAPI', 'LangChain', 'ChromaDB', 'AST Chunking', 'Python'],
      github: 'https://github.com/Shivam8292/Reposage',
      icon: <Search size={24} style={{ color: 'var(--color-secondary)' }} />,
    },
    {
      title: 'AI Resume Screener',
      subtitle: 'Candidate Ranking System',
      description: 'A Semantic RAG-based resume ranking system featuring Groq (Llama 3.3) and HuggingFace embeddings for high-precision JD-candidate matching. Utilizes asyncio for fast bulk processing.',
      tech: ['FastAPI', 'Llama 3.3', 'Groq API', 'HuggingFace', 'Asyncio', 'RAG'],
      github: 'https://github.com/Shivam8292/Resume_screener',
      icon: <UserCheck size={24} style={{ color: 'var(--color-primary)' }} />,
    },
    {
      title: 'Corporate Autopsy Machine',
      subtitle: 'Startup Failure Analysis Tool',
      description: 'A RAG-powered forensic tool analyzing 400+ failed startups in ChromaDB using Gemini 2.0. Generates real-time "Death Scores" and strategic pivot recommendations for new founders.',
      tech: ['Gemini 2.0', 'ChromaDB', 'FastAPI', 'React.js', 'Risk Analysis', 'Vector DB'],
      github: 'https://github.com/Shivam8292/Corporate-Autopsy-Machine',
      icon: <ShieldAlert size={24} style={{ color: 'var(--color-accent)' }} />,
    },
    {
      title: 'Multiagent Research Engine',
      subtitle: 'Collaborative LLM Research Agent',
      description: 'A multi-agent autonomous system that conducts deep research on topics by query synthesis, web crawling, literature review, and generating comprehensive analytical reports.',
      tech: ['Multi-Agents', 'LangGraph', 'Web Crawling', 'Research Synthesis', 'OpenAI API'],
      github: 'https://github.com/Shivam8292/multiagent-research-engine',
      icon: <BrainCircuit size={24} style={{ color: '#ec4899' }} />,
    },
    {
      title: 'Documind',
      subtitle: 'AI Document Intelligence Platform',
      description: 'A smart document reader and question-answering tool that extracts text, tabular structures, and semantically indexes documents for real-time document search and summary generation.',
      tech: ['React.js', 'FastAPI', 'PyMuPDF', 'Vector Indexing', 'LLM Integration'],
      github: 'https://github.com/Shivam8292/Documind',
      icon: <FileText size={24} style={{ color: '#f59e0b' }} />,
    },
  ];

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A showcase of some of my projects, focusing on generative AI, Retrieval-Augmented Generation (RAG), and automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {projectsList.map((project, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Card Header Icon & Repo Link */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.6rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {project.icon}
                </div>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-text-secondary)',
                      transition: 'color 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                    title="View GitHub Repository"
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
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, marginBottom: '0.2rem' }}>
                {project.title}
              </h3>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', fontWeight: 500, marginBottom: '1rem' }}>
                {project.subtitle}
              </h4>

              {/* Description */}
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      background: 'rgba(99, 102, 241, 0.08)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid rgba(99, 102, 241, 0.15)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
