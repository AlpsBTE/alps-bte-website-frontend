import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const logo = require("../../assets/logo.png");

// interface NavProps {

// }

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="nav__logo-wrapper" to="/">
        <img src={logo} alt="Alps BTE logo" />
        <div className="nav__logo-wrapper__text">
          <span className="nav__logo-wrapper__text__title">
            Official Alps BTE
          </span>
          <span className="nav__logo-wrapper__text__subtitle">
            AT | CH | LI
          </span>
        </div>
      </Link>
      <div className="nav__content">
        <NavItem label="News" link="/news" />
        <NavItem label="Our team" link="/team" />
        <NavItem label="Public Relation" link="/publicrelation" />
      </div>
      <div className="nav__button">
        <PrimaryButton
          label="Join us!"
          link="https://discord.com/invite/vgkspay"
        />
      </div>
      <div className="nav__burger"></div>
    </nav>
  );
};

export default Nav;
