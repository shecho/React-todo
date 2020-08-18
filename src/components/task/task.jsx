import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = (props) => {
  const [showEditInputs, setShowEditInputs] = useState(false);
  const [editForms, setEditForms] = useState({});
  const [isCompleted, setIsCompleted] = useState(props.task.is_completed);
  const hadnleTogleEditInput = (e) => {
    e.preventDefault();
    setShowEditInputs(!showEditInputs);
  };
  const TaskToast = async (message) => toast(message);
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
    console.log(res);
    res.status === 200
      ? TaskToast("Se han guadado los cambios")
      : TaskToast("Llena los campos");
    props.getTasks();
    setShowEditInputs(false);
  };

  const completeTaks = async () => {
    // e.preventDefault();
    setIsCompleted((prev) => !prev);
    let data = props.task;
    data.is_completed = isCompleted
    console.log(data);

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
    console.log(res);
    res.status === 200
      ? TaskToast("Se ha completado la tarea")
      : TaskToast("Llena los campos");
    props.getTasks();
  };
  const deleteTask = async (e) => {
    e.preventDefault();
    console.log(props.task._id);
    let id = props.task._id;
    let url = `https://academlo-todolist.herokuapp.com/tasks/${id}`;
    let request = await fetch(url, { method: "DELETE" });

    console.log(request);
    request.status === 200
      ? TaskToast("Se ha eliminado la tarea")
      : TaskToast("Algo salio mal");
    props.getTasks();
  };
  const cardStyles = {
    flexDirection: "row",
  };
  const styleCompleted = () => {
    return {
      textDecoration: isCompleted ? "line-through" : "none",
    };
  };
  return (
    <div className="">
      <div className="col-md-12 m-3 p-2">
        <div
          className="p-3 d-flex card  justify-content-around"
          style={cardStyles}
        >
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center ">
              <div
                className={`d-flex align-items-center  ${
                  isCompleted ? "text-muted" : ""
                }`}
                style={styleCompleted()}
              >
                {props.task.content}
              </div>
              <input
                className={`form-control  ${showEditInputs ? "" : "d-none"}`}
                onInput={(e) => handleFormsInput(e)}
                type="text"
                name="content"
              />
            </div>
            <div className=" d-flex justify-content-center align-items-center ">
              <p className={`m-2 card-text  ${
                  isCompleted ? "text-muted" : ""
                }`}>{props.task.date}</p>

              <input
                className={`form-control  ${showEditInputs ? "" : "d-none"}`}
                onInput={(e) => handleFormsInput(e)}
                type="date"
                name="date"
              />
            </div>
          </div>
          <div className="align-self-end d-flex">
            <button
              className={`m-2 btn btn-success   ${
                showEditInputs ? "" : "d-none"
              }`}
              type="submit"
              onClick={(e) => updateTaskData(e)}
            >
              <i className=" fa fa-save" aria-hidden="true"></i>
            </button>
            <button
              onClick={(e) => deleteTask(e)}
              className="m-2 btn btn-danger "
              type="submit"
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>

            <button
              onClick={hadnleTogleEditInput}
              className="m-2 btn btn-light "
              type="submit"
            >
              <i className=" fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button className="m-2 btn btn-success " type="submit">
              <input
                onChange={(e) => completeTaks(e)}
                type="checkbox"
                id="exampleCheck1"
                checked={props.task.is_completed}
              />
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
