import React from "react";
import landmarkIcon from "../../assets/qualifications/Landmark.png";
import "../../styles/QualificationCard.css";

const QualificationCard = ({ cardInfo }) => {
  return (
    <li className="qual-card">
      <div class="program-container">
        <h4 className="fs-secondary-body fw-semi-bold">{cardInfo.title}</h4>
        <p className="fs-secondary-subheading text-tertiary">
          {cardInfo.program}
        </p>
      </div>
      <img src={landmarkIcon} alt="" width="25" />
      <p className="qual-card-info | fs-secondary-subheading fw-semi-bold ">
        <span>{cardInfo.year}</span>
        <br />
        <span className="text-tertiary fw-regular">{cardInfo.institution}</span>
      </p>
    </li>
  );
};

export default QualificationCard;
