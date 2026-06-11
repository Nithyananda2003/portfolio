import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
                <h4>Software Developer</h4>
                <h5>Invicto Labs · Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading and mentoring 5+ interns through code reviews and sprint planning.
              Built Employee & Team Productivity systems replacing manual spreadsheet workflows.
              Managing automation platforms extracting structured data from 150+ U.S. county tax websites.
              Implemented logging, monitoring, retry mechanisms and production-grade error handling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Web Developer</h4>
                <h5>Invicto Labs · Bengaluru</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed Node.js and Puppeteer automation pipelines across 150+ U.S. county tax websites.
              Built data extraction, DOM parsing, pagination, and normalization workflows.
              Improved scraper performance and maintained production-grade automation systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>KnowMyHealth & IshaDiagnostics</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led frontend development using PHP, JavaScript, HTML, and CSS.
              Developed responsive web interfaces and integrated third-party APIs.
              Improved application performance and UX through UI optimizations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Research Intern</h4>
                <h5>Florida International University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Conducted digital forensics research under Army Research Office funded initiatives.
              Performed evidence acquisition, validation, preservation, and forensic analysis.
              Assisted in research involving cyber investigations and digital evidence handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
