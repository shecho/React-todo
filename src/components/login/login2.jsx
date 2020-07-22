import React from "react";
import "./login2.css";

export default function Login2() {
  return (
    <div className="">
      <form action="index.html" className="form-box animated fadeInUp">
        <h1 className="form-title">SignIn</h1>
        <input type="text" placeholder="Username" autoFocus />
        <input type="password" placeholder="Password" />
        <button type="submit">
          <i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Login
        </button>
      </form>
    </div>
  );
}
