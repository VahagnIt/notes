import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-brand">ToDo App</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
