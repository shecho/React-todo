import React, { useState } from "react";
import "./register2.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register2() {
  const [user, setUser] = useState({});

  const TaskToast = async (message) => toast(message);

  let handleInput = (e) => {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  let registerUser = async (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(user));
    let url = `https://academlo-todolist.herokuapp.com/register`;

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    console.log(response.status);
    // let res = await response.json();
    // console.log(res.errors);
    // response.status >= 400
    //   ? alert("Datos Incorrectos")
    //   : response.status >= 300
    //   ? alert("Redirecionado")
    //   : alert("credenciasles correctas");
    response.status > 400
      ? TaskToast("Llena todos los campos")
      : TaskToast("Registrado Exitosamente, ahora te puedes logar");

    // history.push
  };

  return (
    <div className="">
      <div>
        <ToastContainer />
      </div>
      <form
        onInput={handleInput}
        onSubmit={(e) => registerUser(e)}
        className="form-box animated fadeInUp"
      >
        <h1 className="form-title">SignUp</h1>
        <input name="name" type="text" placeholder="Name" />
        <input name="lastname" type="text" placeholder="Lastname" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">
          <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
          Register
        </button>
      </form>
    </div>
  );
}
