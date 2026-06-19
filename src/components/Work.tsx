import { useState } from "react";
import "./styles/Work.css";

const projects = [
  {
    title: "Reposage",
    description: "AI-powered code search engine indexing GitHub repos for natural language queries — powered by AST-based function-level chunking.",
    tags: ["Python", "FastAPI", "React", "LangChain"],
    specs: ["// AST_CHUNKING", "// SEMANTIC_SEARCH", "// RAG_PIPELINE"],
    link: "https://github.com/Shivam8292/Reposage"
  },
  {
    title: "AI Resume Screener",
    description: "Semantic RAG-based resume ranking system using FastAPI, Llama 3.3 (Groq), and HuggingFace embeddings for high-precision candidate-JD matching.",
    tags: ["FastAPI", "Llama 3.3", "HuggingFace"],
    specs: ["// ASYNC_PIPELINE", "// LLAMA_3.3", "// EXPLAINABLE_SCORING"],
    link: "https://github.com/Shivam8292/SleekScan"
  },
  {
    title: "OfferSense",
    description: "AI-powered salary intelligence platform that evaluates job offer letters against real market data, generates negotiation verdicts, counter-offers, and HR email scripts.",
    tags: ["FastAPI", "React", "Groq", "LLaMA 3.3"],
    specs: ["// OFFER_ANALYSIS", "// SALARY_BENCHMARK", "// NEGOTIATION_AI"],
    link: "https://github.com/Shivam8292/OfferSense"
  },
  {
    title: "Corporate Autopsy Machine",
    description: "Developed a RAG-based platform using Gemini 2.0 to automate forensic startup failure analysis and reporting. Vectorized 400+ startup failures.",
    tags: ["Gemini 2.0", "ChromaDB", "React"],
    specs: ["// DEATH_SCORE_GEN", "// CHROMA_DB", "// RISK_ANALYSIS"],
    link: "https://github.com/Shivam8292/Corporate-Autopsy-Machine"
  },
  {
    title: "Multiagent Research Engine",
    description: "Multi-agent deep research system powered by Gemini 2.5 Flash and Tavily Search API, orchestrating 5 specialized agents to collaborate and generate report.",
    tags: ["FastAPI", "React", "Gemini 2.5", "Tavily"],
    specs: ["// MULTI_AGENT_FLOW", "// GEMINI_2.5_FLASH", "// DEEP_RESEARCH"],
    link: "https://github.com/Shivam8292/multiagent-research-engine"
  },
  {
    title: "Documind",
    description: "A seamless intelligent document analysis platform for querying complex PDF datasets with high accuracy using semantic embeddings.",
    tags: ["AI", "RAG", "Embeddings"],
    specs: ["// PDF_ANALYSIS", "// HIGH_ACCURACY", "// SEMANTIC_SEARCH"],
    link: "https://github.com/Shivam8292/Documind"
  }
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <div className="work-chapter-badge">CHAPTER 01</div>
          <h2>
            Selected <span>Works</span>
          </h2>
          <p className="work-subtitle">
            A showcase of systems built and technical problems solved.
          </p>
        </div>

        <div className={`work-layout-wrapper ${isExpanded ? "grid-view" : "stack-view"}`}>
          {!isExpanded && (
            <div className="expand-btn-container">
              <div className="expand-btn-sticky">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="expand-btn"
                  data-cursor="disable"
                >
                  <div className="expand-dot-container">
                    <div className="expand-ping" />
                    <div className="expand-dot" />
                  </div>
                  <div className="expand-text">
                    {"EXPAND".split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </div>
                </button>
              </div>
            </div>
          )}

          {isExpanded && (
            <div className="collapse-btn-container">
              <button
                onClick={() => setIsExpanded(false)}
                className="collapse-btn"
                data-cursor="disable"
              >
                Collapse View
              </button>
            </div>
          )}

          <div className="projects-list">
            {projects.map((project, i) => {
              const isHovered = activeIndex === i;
              return (
                <div
                  key={project.title}
                  className="project-card-container"
                  style={{
                    position: isExpanded ? "relative" : "sticky",
                    top: isExpanded ? "auto" : `${150 + i * 20}px`,
                    zIndex: isExpanded ? 1 : i + 1,
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`project-card ${isHovered ? "hovered" : ""}`}
                    data-cursor="disable"
                  >
                    {/* Hover BG Color Blend */}
                    <div className={`card-hover-bg ${isHovered ? "active" : ""}`} />

                    <div className="card-number">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="card-content">
                      <div className="card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="card-title">{project.title}</h3>

                      <p className="card-description">{project.description}</p>

                      <div className="card-specs">
                        {project.specs.map((spec) => (
                          <span key={spec} className="spec-line">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="card-action">
                        <div className="arrow-box">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="square"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                        <span className={`action-text ${isHovered ? "visible" : ""}`}>
                          View Project
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
