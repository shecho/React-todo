import React from "react";

export default function Login() {
  return (
    <>
      <div className="m-4 row">
        <div className="col-12 text-center">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                capture
                name="lastname"
                type="text"
                placeholder="Apellido"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <input
              className="btn btn-success btn-block"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
}
