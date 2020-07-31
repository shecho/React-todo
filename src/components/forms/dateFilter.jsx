import React from "react";

const contaierStyles = {
  background: "#fff",
  borderRadius: "8px",
};
const inputStyles = { border: "none" };
const DateFilter = (props) => {
  return (
    <div>
      <div className={`text-center ${props.showDateForm ? '' : 'd-none'}`}>
      <form onInput={props.handleInput}>
        <div
          className="form-group d-flex border justify-content-center align-items-center"
          style={contaierStyles}
        >
          <i className="h1 p-1 text-dark fa fa-search" aria-hidden="true"></i>
          <input
            style={inputStyles}
            className="form-control"
            name="name"
            type="date"
            placeholder="Select a Date"
          />
        </div>
      </form>
    </div>
</div>
  );
};
export default DateFilter;
