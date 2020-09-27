import React from "react";
import TitleButton from "../../components/TitleButton/TitleButton";
import "./Home.scss";
const bgVideo = require("../../assets/videos/Build_The_Earth_1_1 AT_CH_LI _TRAILER_25mb.mp4");

// interface HomeProps {}

const Home = () => {
  return (
    <div className="home">
      <section className="home-section home__hero">
        <video src={bgVideo} loop muted autoPlay></video>
        <div className="home__hero__title">
          <h1 className="home__hero__title__text">
            Become part of the server today!
          </h1>
          <TitleButton style={{ marginTop: "5%" }} />
        </div>
      </section>
      <section className="home-section home__the-server"></section>
    </div>
  );
};

export default Home;
