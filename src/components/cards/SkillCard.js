import React from "react";
import "../../styles/SkillCard.css";
import { useTheme } from "../../context/ThemeProvider";

const SkillCard = ({ card }) => {
  const { theme } = useTheme();
  return (
    <article className={`card bg-secondary ${theme === "light" && "light"}`}>
      <img src={card.logo} alt={`${card.title} logo`} className="skillLogo" />
      <h3 className="uppercase fs-primary-body fw-semi-bold">{card.title}</h3>
    </article>
  );
};

export default SkillCard;
