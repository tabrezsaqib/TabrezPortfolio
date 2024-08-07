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
            As a Web developer, I have a deep understanding of the core concepts and tools, including JSX, components, props, state, and lifecycle methods. 
            I am proficient in building reusable and modular components, integrating with third-party libraries and APIs, and optimizing the performance and accessibility of web applications. 
            With a strong background in HTML, CSS, and JavaScript, as well as experience with Redux and React Router, 
            I am able to deliver high-quality code that meets the needs of clients and end-users. I am a graduate in Electrical and Computer
            Engineering and my experience working as an Application Development Analyst, and various exposure to projects, has enligtened me on various aspects. 
            I have a strong interest in developing web pages. I have been a Web Developer for over a year now and have contributed to various roles and multiple responsibilities. Additionaly I have enligthened myself on AWS and DevOps tools such as EC2, S3, AWS Lambda, Kubernetes, Terraform and Ansible and implemented mini projects. 
            During my job at Accenture, I learned skills such as React.js, HTML5, CSS3, JavascriptES6, PL/SQL, Python, BI Publisher, EPIC Cadence, and Prelude which prove I am a quick and enthusiastic learner.
            Having worked on various projects during and outside my courses has sharpened my React skills and enlightened me on new and emerging tools such as Postman, Firestore to manage APIs. 
            I have assisted an innovation team back in Accenture to develop a mental health scan app for a client. I have single handedly created and maintained the NB Plants website for the Fredericton Botanical Garden Association. 
            I have also implemented Redux, CSS3, HTML5, React.js, JSON, and JavaScript ES6 on multiple projects such as NB Plants Website, Mental Health Scan App, Adopt a Dog, and much more. 
          </p>
          <div className="about-button-container">
            <button className="btn inverted">
              <a href="#Contact" className="uppercase">
                Contact
              </a>
            </button>{" "}
            <button className="btn inverted">
              <a
                href="https://drive.google.com/file/d/1-SV_8W4JHhrXh7-Y6JxCA6dCN3Vd-SfT/view?usp=sharing"
                download="MohamedTabrezSaqib_UbaidurRahman_CV.pdf"
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
