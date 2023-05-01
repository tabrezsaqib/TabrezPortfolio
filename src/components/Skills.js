import React from "react";
import { skills } from "../data/skills";
import { v4 as uuidv4 } from "uuid";
import SkillCard from "./cards/SkillCard";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="Skills" className="padding-inline padding-block">
      <div class="skills-wrapper">
        <div class="skills-title">
          <p className="uppercase fs-secondary-subheading fw-semi-bold">
            What I am good at
          </p>
          <h2 className="fs-secondary-heading fw-bold text-primary">Skills</h2>
        </div>
        <div class="skillCardContainer">
          {skills.map((card) => {
            return <SkillCard key={uuidv4()} card={card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
