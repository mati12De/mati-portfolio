import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Mati-cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer passionate about building interactive and
            responsive web applications. I focus on creating user-friendly
            interfaces and seamless experiences using modern technologies.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ marginLeft: "0.5rem" }}
            >
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 18v2h14v-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
