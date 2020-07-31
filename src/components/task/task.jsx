import React from "react";

const Task = (props) => {
  console.log(props.task);
  return (
    <div>
      <div className="col m-3 px-2">
        <div className="card text-center">
          <div className="card-body text-center">
            <div className="d-flex justify-content-center align-items-center ">
              <h6 className="m-2 card-title">{props.task.content}</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <p className="m-2 card-text">{ props.task.date.slice(0,-14)}</p>
            </div>
          </div>
          <div>
            <button  className="btn btn-danger m-2" type="submit">
              <i className="m-2 fa fa-trash-o" aria-hidden="true"></i>
            </button>

            <button onClick={props.handleTogleEditShow} className=" btn btn-success m-2 " type="submit">
              <i className="m-2 fa fa-pencil"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
