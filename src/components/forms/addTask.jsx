import React from "react";

const AddTask = (props) => {
  return (
    <>
      <div className={`text-center ${props.showForm ? '' : 'd-none'}`}>
        <h4> Add Tasks</h4>
        <form onInput={props.handleInput} onSubmit={(e) => props.addTask(e)}>
          <div className="form-group">
            <input
              className="form-control"
              name="content"
              type="text"
              placeholder="Content"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              capture
              name="date"
              type="date"
            placeholder="Date"
            />
          </div>
          <input className="btn btn-success btn-block" type="submit" />
        </form>
      </div>
    </>
  );
};
export default AddTask;
