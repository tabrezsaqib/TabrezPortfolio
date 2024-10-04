import React from "react";
import aboutIllustrators from "../assets/About.png";
import "../styles/About.css";

const About = () => {
  return (
    <section
      id="About"
      className="about-container | padding-inline padding-block"
    >
      <div class="wrapper-container">
        <img
          className="illustImage"
          src={aboutIllustrators}
          alt="developer-illustrator"
        />
        <div class="about-info">
          <div class="about-title">
            <p className="uppercase fs-secondary-subheading fw-semi-bold">
              Let me introduce myself
            </p>
            <h2 className="fs-secondary-heading fw-bold text-primary">
              About me
            </h2>
          </div>
          <p className="fs-secondary-body fw-regular text-tertiary">
          DevOps Engineer with a background in web development and a degree in Electrical and Computer Engineering. Experienced in designing and deploying scalable infrastructure using Terraform, Kubernetes, AWS, and Azure DevOps. Skilled in automating deployment pipelines with Jenkins, managing Docker containers, and optimizing performance with Prometheus and Grafana. Passionate about delivering efficient, secure solutions for clients and end-users.
          </p>
          <div className="about-button-container">
            <button className="btn inverted">
              <a href="#Contact" className="uppercase">
                Contact
              </a>
            </button>{" "}
            <button className="btn inverted">
              <a
                href="https://drive.google.com/file/d/1cS40bMfWDoJwMfEAuFd2zija9GJOeS3L/view?usp=sharing"
                download="MohamedTabrezSaqib_UbaidurRahman_CV_DevOps_Engineer.pdf"
                target="_blank"
                className="uppercase"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
