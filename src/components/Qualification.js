import React from "react";
import QualificationLayout from "./layout/QualificationLayout";
import { v4 as uuidv4 } from "uuid";
import { institutionLogo } from "../data/institutionLogo";
import { education } from "../data/education";
import { work } from "../data/work";
import "../styles/Qualification.css";
import { useTheme } from "../context/ThemeProvider";

const Qualification = () => {
  const { theme } = useTheme();
  return (
    <section
      id="Qualification"
      className={`qualification-container | padding-inline padding-block ${
        theme === "light" && "qualification-light"
      }`}
    >
      <div class="qualification-wrapper">
        <div class="qualification-title">
          <p className="uppercase fs-secondary-subheading fw-semi-bold">
            A Summary of My Background
          </p>
          <h2 className="fs-secondary-heading fw-bold text-primary">
            Qualification
          </h2>
        </div>
        <div class="qualification-card-container">
          <QualificationLayout cat={education} />
          <QualificationLayout cat={work} />
        </div>
        <ul className="init-logo-bar">
          <div class="logo-wrapper">
            {institutionLogo.map((item) => {
              return (
                <li key={uuidv4()}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.logo} alt={item.title} />
                  </a>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Qualification;
