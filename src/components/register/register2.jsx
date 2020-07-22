import React from "react";
import "./register2.css";

export default function Register2() {
  return (
    <div className="">
      <form action="index.html" className="form-box animated fadeInUp">
        <h1 className="form-title">SignUp</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">
          <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
          Register
        </button>
      </form>
    </div>
  );
}
