import React from "react";
import "./Home.scss";

interface HomeProps {
  title: string;
}

const Home = ({ title }: HomeProps) => {
  return (
    <div className="home">
      <div className="home__hero">{title}</div>
    </div>
  );
};

export default Home;
