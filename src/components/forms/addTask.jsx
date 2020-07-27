import React from "react";

const AddTask = (props) => {
  return (
    <>
      <div className="m-4 p-3 d-none">
        <h4> Add Tasks</h4>
        <form onInput={props.handleInput} onSubmit={(e) => props.addUser(e)}>
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
          <input className="btn btn-success btn-block" type="submit" />
        </form>
      </div>
    </>
  );
};
export default AddTask;
