import React, { useState } from "react";

const Task = (props) => {
  const [showEditInputs, setShowEditInputs] = useState(false);
  const [editForms, setEditForms] = useState({});
  const hadnleTogleEditInput = (e) => {
    e.preventDefault();
    setShowEditInputs(!showEditInputs);
  };
  const handleFormsInput = (e) => {
    setEditForms({
      ...editForms,
      [e.target.name]: e.target.value,
    });

    // console.table(editForms);
  };

  const updateTaskData = async (e) => {
    e.preventDefault();
    let data = editForms;
    let id = props.task._id;
    let url = `https://academlo-todolist.herokuapp.com/tasks/${id}`;
    // console.log(url);
    let res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
    // console.log(res);

    props.getTasks()
    setShowEditInputs(false)

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
                className={`form-control  ${showEditInputs ? "" : "d-none"}`}
                onInput={(e) => handleFormsInput(e)}
                type="text"
                name="content"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center ">
              <p className="m-2 card-text">{props.task.date}</p>

              <input
                className={`form-control  ${showEditInputs ? "" : "d-none"}`}
                onInput={(e) => handleFormsInput(e)}
                type="date"
                name="date"
              />
            </div>
          </div>
          <div className="align-self-end">
            <button
              className={`m-2 btn btn-success   ${
                showEditInputs ? "" : "d-none"
              }`}
              type="submit"
              onClick={(e) => updateTaskData(e)}
            >
              <i className=" fa fa-save" aria-hidden="true"></i>
            </button>
            <button className="m-2 btn btn-danger " type="submit">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>

            <button
              onClick={hadnleTogleEditInput}
              className="m-2 btn btn-light "
              type="submit"
            >
              <i className=" fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              onClick={props.handleTogleEditShow}
              className="d-none btn btn-warning "
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
