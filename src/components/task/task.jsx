import React from "react";

const Task = (props) => {
  return (
    <div>
      <div className="col m-3 px-2">
        <div className="card text-center">
          <div className="card-body text-center">
            <div className="d-flex justify-content-center align-items-center ">
              <h6 className="m-2 card-title">Task Description</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <p className="m-2 card-text">Taks timestamp</p>
            </div>
          </div>
          <div>
            <button className="btn btn-danger m-2" type="submit">
              Delete Task
              <i className="m-2 fa fa-trash-o" aria-hidden="true"></i>
            </button>

            <button className=" btn btn-success m-2 " type="submit">
              Edit Task
              <i className="m-2 fa fa-pencil"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
