import React from "react";

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1+ Year</span>
      </div>

      <div className="about__box">
        <i className="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">5+ Completed</span>
      </div>

      <div className="about__box">
        <i className="uil uil-headphones-alt about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
