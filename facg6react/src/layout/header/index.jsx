import React from "react";
// import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      
      <ul className="nav">
        <li className="nav-bar">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-bar">
          <NavLink className="nav-link" to="/all-students">
            All Students
          </NavLink>
        </li>
        <li className="nav-bar">
          <NavLink className="nav-link" to="/student">
            Student
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
