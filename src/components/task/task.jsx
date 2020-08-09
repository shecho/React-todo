import React, { useState } from "react";

const Task = (props) => {
  const [showEditInputs, setShowEditInputs] = useState(false);
  const hadnleTogleEditInput = (e) => {
    e.preventDefault();
    setShowEditInputs(!showEditInputs)
  };
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
              <input
                className={`form-control  ${ showEditInputs ? '' : 'd-none'}`}
                type="text"
                value={props.task.content}
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center ">
              <p className="m-2 card-text">{props.task.date}</p>

              <input
                className={`form-control  ${ showEditInputs ? '' : 'd-none'}`}
                type="text"
                value={props.task.content}
              />
            </div>
          </div>
          <div className="align-self-end">
            <button 
                className={`m-2 btn btn-success   ${ showEditInputs ? '' : 'd-none'}`}
              
              type="submit">
              <i className=" fa fa-save" aria-hidden="true"></i>
            </button>
            <button className="m-2 btn btn-danger " type="submit">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>

            <button
              onClick={hadnleTogleEditInput }
              className="m-2 btn btn-light "
              type="submit"
            >
              <i className=" fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              onClick={props.handleTogleEditShow}
              className= "d-none btn btn-warning "
              type="submit"
            >
              <i className=" fa fa-pencil" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
