import React from "react";
import { NavLink } from "react-router-dom";
import navstyle from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={navstyle.nav_container}>
      <NavLink to=".">
        <h1 className={navstyle.logo}>#VANLIFE</h1>
      </NavLink>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? navstyle.active_link : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? navstyle.active_link : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? navstyle.active_link : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
