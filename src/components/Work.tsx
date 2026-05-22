import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Reposage",
    category: "AI Code Search Engine",
    tools: "React, FastAPI, LangChain, ChromaDB, Python",
    image: "/images/next1.webp",
    link: "https://github.com/Shivam8292/Reposage"
  },
  {
    title: "AI Resume Screener",
    category: "Candidate Ranking System",
    tools: "FastAPI, Llama 3.3, Groq API, HuggingFace, Asyncio, RAG",
    image: "/images/next2.webp",
    link: "https://github.com/Shivam8292/Resume_screener"
  },
  {
    title: "Corporate Autopsy Machine",
    category: "Startup Failure Analysis Tool",
    tools: "Gemini 2.0, ChromaDB, FastAPI, React.js, Vector DB",
    image: "/images/nextBL.webp",
    link: "https://github.com/Shivam8292/Corporate-Autopsy-Machine"
  },
  {
    title: "Multiagent Research Engine",
    category: "Collaborative LLM Research Agent",
    tools: "Multi-Agents, LangGraph, Web Crawling, OpenAI API",
    image: "/images/react.webp",
    link: "https://github.com/Shivam8292/multiagent-research-engine"
  },
  {
    title: "Documind",
    category: "AI Document Intelligence Platform",
    tools: "React.js, FastAPI, PyMuPDF, Vector Indexing, LLM Integration",
    image: "/images/node.webp",
    link: "https://github.com/Shivam8292/Documind"
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
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
