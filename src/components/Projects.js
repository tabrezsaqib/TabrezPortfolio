import React, { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import "../styles/Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { register } from "swiper/element/bundle";
import { useTheme } from "../context/ThemeProvider";

register();

const Projects = () => {
  const swiperElRef = useRef(null);
  const { theme } = useTheme();

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener("progress", (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener("slidechange", (e) => {
  //     console.log("slide changed");
  //   });
  // }, []);
  return (
    <section
      id="Projects"
      className={`projects-container | padding-inline padding-block ${
        theme === "light" && "projects-light"
      }`}
    >
      <div class="projects-wrapper">
        <div class="projects-title">
          <p className="uppercase fs-secondary-subheading fw-semi-bold">
            Some of my recent work
          </p>
          <h2 className="fs-secondary-heading fw-bold text-primary">Projects</h2>
        </div>
        {/* <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        {/* <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          speed="500"
          loop="true"
          css-mode="true"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          ...
        </swiper-container> */}
        <ul className="project-card-container">
          {projects.map((project) => {
            return (
              // <SwiperSlide>
              <ProjectCard key={uuidv4()} projectInfo={project} />
              // </SwiperSlide>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
