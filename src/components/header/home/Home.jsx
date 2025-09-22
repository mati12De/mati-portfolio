import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* 1. Social links */}
          <Social />

          {/* 2. Title / Info */}
          <Data />

          {/* 3. Profile image */}
          <div className="home__img">
            <img src="/profile.jpg" alt="profile" />
          </div>
          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Home;
