import React from "react";
import "./TitleButton.scss";
const discordIcon = require("../../assets/icons/discord.png");

interface TitleButtonProps {
  style?: React.CSSProperties;
}

const TitleButton = ({ style }: TitleButtonProps) => {
  return (
    <button className="title-button" style={style && style}>
      <img
        src={discordIcon}
        alt="Discord icon"
        className="title-button__icon"
      />
      <span className="title-button__text">Join us!</span>
    </button>
  );
};

export default TitleButton;
