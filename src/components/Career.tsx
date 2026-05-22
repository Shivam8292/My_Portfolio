import "./styles/Career.css";

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
      </div>
    </div>
  );
};

export default Career;
