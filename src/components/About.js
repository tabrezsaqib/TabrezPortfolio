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
          DevOps Engineer with a degree in Electrical and Computer Engineering. Proven experience in designing and deploying scalable infrastructure using Terraform, Kubernetes, Azure, and AWS. Skilled in building end-to-end CI/CD pipelines with Jenkins and Azure DevOps, automating container image workflows, and managing Kafka infrastructure. Adept at enhancing observability by migrating to Prometheus and Grafana, and improving microservices security and traffic control using Istio. Passionate about delivering efficient, secure, and cost-effective solutions through automation and collaboration.
          </p>
          <div className="about-button-container">
            <button className="btn inverted">
              <a href="#Contact" className="uppercase">
                Contact
              </a>
            </button>{" "}
            <button className="btn inverted">
              <a
                href="https://drive.google.com/file/d/1CL7LmT9rLIVKsjG5cJungCTf_C_DpmQg/view?usp=sharing"
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
