import React from "react";

const contaierStyles = {
  background: "#fff",
  borderRadius: "8px",
};
const inputStyles = { border: "none" };
const SearchTasks = (props) => {
  return (
    <div className="row">
      {/* <h4> Seacrh Task</h4> */}
      <form onInput={props.handleInput} onSubmit={(e) => props.addUser(e)}>
        <div
          className="form-group d-flex border justify-content-center align-items-center"
          style={contaierStyles}
        >
          <i className="h1 p-1 text-dark fa fa-search" aria-hidden="true"></i>
          <input
            style={inputStyles}
            className="form-control"
            name="name"
            type="text"
            placeholder="Filter taks by description"
          />
        </div>
      </form>
    </div>
  );
};
export default SearchTasks;
