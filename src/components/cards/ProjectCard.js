import React from "react";
import "../../styles/ProjectCard.css";

const PortfolioCard = ({ projectInfo }) => {
  return (
    <li className="project-card">
      <img
        src={projectInfo.thumbnail}
        alt={`${projectInfo.title} screenshot`}
        width="500px"
      />
      <div class="project-info">
        <div class="project-description">
          <h3 className="fs-primary-body fw-semi-bold">{projectInfo.title}</h3>
          <p className="fs-projects-body fw-regular text-tertiary">
            {projectInfo.info}
          </p>
        </div>
        <div class="project-links">
          {/* <button className="btn inverted">
            <a
              href={projectInfo.liveLink}
              className="uppercase"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </button>{" "} */}
          <button className="btn inverted">
            <a
              href={projectInfo.codeLink}
              className="uppercase"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </button>
        </div>
      </div>
    </li>
  );
};

export default PortfolioCard;
