import React, { useState } from "react";
import "./login2.css";
export default function Login2(props) {
  const [user, setUser] = useState({});
  const [isLogged, setIslogged] = useState(false);
  let handleInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const loginUser = async (e) => {
    e.preventDefault();
    let url = `https://academlo-todolist.herokuapp.com/login`;
    // console.log(url);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });

    response.status >= 200 && response.status < 300
      ? props.handleLogStatus(true)
      : alert("credenciasles incorrectas");
  };

  return (
    <div className="">
      <form
        onInput={handleInput}
        onSubmit={(e) => loginUser(e)}
        className="form-box animated fadeInUp"
      >
        <h1 className="form-title">SignIn</h1>
        <input name="email" type="email" placeholder="Email" autoFocus />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">
          <i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Login
        </button>
      </form>
    </div>
  );
}
