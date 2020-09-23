import React from "react";
import "./Home.scss";
const bgVideo = require("../../assets/videos/Build_The_Earth_1_1 AT_CH_LI _TRAILER_25mb.mp4");

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className="home">
      <section className="home__hero">
        <video src={bgVideo} loop muted autoPlay></video>
        <div className="home__hero__title">
          <h1 className="home__hero__title__text">
            Become part of the server today!
          </h1>
        </div>
      </section>
      <section className="home__"></section>
    </div>
  );
};

export default Home;
