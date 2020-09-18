import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";

interface NavItemProps {
  label: string;
  link: string;
}

const NavItem = ({ label, link }: NavItemProps) => {
  return (
    <Link className="nav-item" to={link}>
      <li className="nav-item__element">{label}</li>
    </Link>
  );
};

export default NavItem;
