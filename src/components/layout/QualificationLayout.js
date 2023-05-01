import React from "react";
import { v4 as uuidv4 } from "uuid";
import Dot from "../../assets/qualifications/Dot.png";
import QualificationCard from "../cards/QualificationCard";
import "../../styles/QualificationLayout.css";

const QualificationLayout = ({ cat }) => {
  return (
    <div className="qual-layout-container">
      <h3 className="uppercase fs-primary-body fw-bold">{cat.category}</h3>
      <img src={cat.icon} alt={`${cat.category}'s logo`} width="50px" />
      <ul className="qual-list">
        {cat.list.map((item) => {
          return <QualificationCard key={uuidv4()} cardInfo={item} />;
        })}
      </ul>
      <img src={Dot} width="25px" alt="" />
      <div
        className={`qual-connector ${cat.category === "Education" && "edu"}`}
      ></div>
    </div>
  );
};

export default QualificationLayout;
