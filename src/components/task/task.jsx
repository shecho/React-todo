import React from "react";

const Task = (props) => {
  const cardStyles = {
    flexDirection: "row",
  };
  return (
    <div className="">
      <div className="col-md-12 m-3 p-2">
        <div
          className="p-3 d-flex card  justify-content-around"
          style={cardStyles}
        >
          <div className="d-flex ">
            <div className="d-flex justify-content-center align-items-center ">
              <h6 className="m-2 card-title">{props.task.content}</h6>
            </div>
            <div className=" d-flex justify-content-center align-items-center ">
              <p className="m-2 card-text">{props.task.date.slice(0, -14)}</p>
            </div>
          </div>
          <div className="align-self-end">
            <button className="m-2 btn btn-danger " type="submit">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>

            <button
              onClick={props.handleTogleEditShow}
              className="m-2 btn btn-success "
              type="submit"
            >
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
