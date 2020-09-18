import React from "react";
import "./PrimaryButton.scss";

interface PrimaryButtonProps {
  label: string;
  link: string;
}

const PrimaryButton = ({ link, label }: PrimaryButtonProps) => {
  return (
    <a
      href={link}
      target="_tab"
      rel="noopener noreferrer"
      className="primary-button"
    >
      <button className="primary-button__button">{label}</button>
    </a>
  );
};

export default PrimaryButton;
