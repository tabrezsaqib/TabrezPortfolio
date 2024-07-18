import React from "react";
import myPhoto from "../assets/myPhoto-mobile.png";
import "../styles/Hero.css";
import { useTheme } from "../context/ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="Hero"
      className={`hero-container | padding-inline padding-block ${
        theme === "light" && "hero-light"
      }`}
    >
      <div className="hero-wrapper">
        <svg
          className="profile-svg"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              fill="#4DDA87"
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image href={myPhoto} width={200} />
          </g>
        </svg>
        <div className="text-container">
          <h1 className="uppercase fs-primary-subheading fw-semi-bold">
            Hello! I'm <br />{" "}
            <span className="uppercase-remove fs-primary-heading fw-bold">
              Mohamed Tabrez Saqib
            </span>
          </h1>
          <p className="fs-primary-body fw-regular">
            An innovative web developer who is passionate about building scalable, 
            performant, user-friendly web applications using the React library and 
            I am able to deliver high-quality code that meets the needs of clients and end-users.
          </p>
          <button type="button" className="btn inverted uppercase ">
            <a href="#Projects">view projects</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
