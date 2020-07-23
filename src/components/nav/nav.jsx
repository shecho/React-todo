import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./nav.css";

export default function nav() {
  return (
    <Router>
      <>
        <nav>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="nav-links">
            <li>
              <i className="fa fa-home mx-2" aria-hidden="true"></i>Home
            </li>
            <li>
              <i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Login
            </li>
            <li>
              <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
              Register
            </li>
          </ul>
        </nav>
      </>
    </Router>
  );
}
