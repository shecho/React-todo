import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <>
      <nav>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>
              <i className="fa fa-home mx-2" aria-hidden="true"></i>Home
            </li>
          </Link>

          <Link style={navStyle} to="/login">
            <li>
              <i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Login
            </li>
          </Link>
          <Link style={navStyle} to="/register">
            <li>
              <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
              Register
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
