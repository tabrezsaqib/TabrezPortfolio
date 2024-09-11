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
          As a DevOps Engineer with a robust background in web development, I excel in leveraging core concepts and tools such as JSX, components, props, state, and lifecycle methods. I have engineered reusable and modular components, integrated third-party libraries and APIs, and optimized web application performance and accessibility. My proficiency in HTML, CSS, and JavaScript, combined with experience in Redux and React Router, enables me to deliver high-quality code that meets client and end-user needs.
I hold a degree in Electrical and Computer Engineering and have enhanced my skills through roles such as Application Development Analyst. My exposure to various projects has illuminated multiple aspects of development. Over the past year, I have contributed to diverse roles and responsibilities as a Web Developer, expanding my expertise in AWS and DevOps tools like EC2, S3, AWS Lambda, Kubernetes, Terraform, and Ansible through mini projects.
At Accenture, I acquired skills in React.js, HTML5, CSS3, JavaScript ES6, PL/SQL, Python, BI Publisher, EPIC Cadence, and Prelude, demonstrating my ability to learn quickly and enthusiastically. My work on various projects has sharpened my React skills and introduced me to emerging tools like Postman and Firestore for API management.
I have assisted an innovation team at Accenture in developing a mental health scan app for a client and single-handedly created and maintained the NB Plants website for the Fredericton Botanical Garden Association. Additionally, I have implemented Redux, CSS3, HTML5, React.js, JSON, and JavaScript ES6 on multiple projects, including the NB Plants Website, Mental Health Scan App, and Adopt a Dog.
In the realm of DevOps, I have designed and deployed infrastructure using Terraform, automated deployment pipelines with Jenkins, and managed containerized applications using Docker and Kubernetes. I have also monitored and optimized system performance using Prometheus and Grafana, and secured cloud environments with AWS IAM and VPC configurations. My hands-on experience includes projects such as building a CI/CD pipeline for a microservices application, migrating on-premises applications to AWS, and implementing infrastructure as code (IaC) for scalable deployments
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
