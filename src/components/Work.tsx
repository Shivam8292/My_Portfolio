import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Reposage",
    category: "AI Code Search Engine",
    tools: "React, FastAPI, LangChain, ChromaDB, Python",
    image: "/images/reposage.png",
    link: "https://github.com/Shivam8292/Reposage"
  },
  {
    title: "AI Resume Screener",
    category: "Candidate Ranking System",
    tools: "FastAPI, Llama 3.3, Groq API, HuggingFace, Asyncio, RAG",
    image: "/images/resume_screener.png",
    link: "https://github.com/Shivam8292/Resume_screener"
  },
  {
    title: "Corporate Autopsy Machine",
    category: "Startup Failure Analysis Tool",
    tools: "Gemini 2.0, ChromaDB, FastAPI, React.js, Vector DB",
    image: "/images/autopsy.png",
    link: "https://github.com/Shivam8292/Corporate-Autopsy-Machine"
  },
  {
    title: "Multiagent Research Engine",
    category: "Collaborative LLM Research Agent",
    tools: "Multi-Agents, LangGraph, Web Crawling, OpenAI API",
    image: "/images/research_engine.png",
    link: "https://github.com/Shivam8292/multiagent-research-engine"
  },
  {
    title: "Documind",
    category: "AI Document Intelligence Platform",
    tools: "React.js, FastAPI, PyMuPDF, Vector Indexing, LLM Integration",
    image: "/images/documind.png",
    link: "https://github.com/Shivam8292/Documind"
  }
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div
              className="work-box"
              key={index}
              style={{
                position: "sticky",
                top: `${120 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
