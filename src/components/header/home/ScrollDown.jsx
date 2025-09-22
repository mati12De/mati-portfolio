import React from "react";
import "./home.css";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        {/* First Mouse SVG */}
        <svg
          width="35"
          height="55"
          viewBox="0 0 35 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__mouse"
        >
          <rect
            x="1"
            y="1"
            width="33"
            height="53"
            rx="16"
            stroke="#111"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="17.5"
            cy="12"
            r="3"
            fill="#111"
            className="scroll-wheel"
          />
        </svg>

        {/* Scroll text */}
        <span className="home__scroll-name">Scroll Down</span>

        {/* Arrow */}
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
