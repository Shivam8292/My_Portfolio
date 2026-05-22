import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./styles/Career.css";

interface Skill {
  name: string;
  level: number;
}

const skillsList: Skill[] = [
  { name: "Python / AI", level: 95 },
  { name: "FastAPI / Backend", level: 90 },
  { name: "React / Frontend", level: 85 },
  { name: "RAG / LangChain", level: 88 },
  { name: "SQL / ChromaDB", level: 80 },
  { name: "C++ / Systems", level: 75 }
];

const InteractiveSkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [percent, setPercent] = useState(skill.level);
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [colliding, setColliding] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const handleInteraction = (e: React.PointerEvent | PointerEvent) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPercent(newPercent);

    const rounded = Math.round(newPercent);
    setColliding(newPercent >= 100 || newPercent <= 0);

    if (fillRef.current) {
      fillRef.current.style.width = `${newPercent}%`;
    }
    if (labelRef.current) {
      labelRef.current.innerText = `${rounded}%`;
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    if (tweenRef.current) tweenRef.current.kill();
    e.currentTarget.setPointerCapture(e.pointerId);
    handleInteraction(e);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging) handleInteraction(e);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const startVal = percent;
    const targetVal = skill.level;

    const proxy = { val: startVal };
    if (tweenRef.current) tweenRef.current.kill();

    tweenRef.current = gsap.to(proxy, {
      val: targetVal,
      duration: 1.2,
      ease: "elastic.out(1, 0.4)",
      onUpdate: () => {
        const v = proxy.val;
        setPercent(v);
        if (fillRef.current) {
          fillRef.current.style.width = `${v}%`;
        }
        if (labelRef.current) {
          labelRef.current.innerText = `${Math.round(v)}%`;
        }
        setColliding(v >= 100 || v <= 0);
      },
      onComplete: () => {
        setPercent(targetVal);
        setColliding(false);
      }
    });
  };

  useEffect(() => {
    if (fillRef.current) {
      gsap.fromTo(
        fillRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          delay: index * 0.1,
          ease: "power2.out",
          transformOrigin: "left center"
        }
      );
    }
  }, [index]);

  return (
    <div className="skill-bar-item">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span ref={labelRef} className="skill-percentage">
          {Math.round(percent)}%
        </span>
      </div>
      <div
        ref={barRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`skill-track ${isDragging ? "dragging" : ""} ${colliding ? "colliding" : ""}`}
        data-cursor="disable"
      >
        <div
          ref={fillRef}
          className="skill-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Developer Intern</h4>
                <h5>EOXS (Remote)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built AI-powered ERP automation workflows for business process optimization in the steel industry. Developed and tested robust REST APIs using Python and FastAPI for operational analytics and enterprise integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. CSE (AI & ML)</h4>
                <h5>Chandigarh University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed B.E. (Hons.) in Computer Science Engineering with specialization in AI & ML, achieving a CGPA of 7.88/10. Studied advanced topics in Deep Learning, Vector Search, and Multi-Agent workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary</h4>
                <h5>Millia Convent School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Class 12 (Senior Secondary Education) in Purnia, Bihar, with a score of 88%, focusing on Science and Mathematics stream.
            </p>
          </div>
        </div>

        {/* Core Expertise Sub-section */}
        <div className="core-expertise-container">
          <h3 className="expertise-title">Core Expertise</h3>
          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <InteractiveSkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
