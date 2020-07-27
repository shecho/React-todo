import React, { useState, useEffect } from "react";
import Task from "../task/task";
import "./tasks.css";
import AddTasks from "../forms/addTask";
import UpdateTasks from "../forms/updateTask";
const Tasks = (props) => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    setTasks([]);
    console.log(tasks);
    let url = `https://academlo-todolist.herokuapp.com/tasks`;
    // console.log(url);
    let response = await fetch(url);
    console.log(response);
  };

  const addTask = async (e) => {
    console.log(e);
  };
  const deleteTask = async (e) => {
    console.log(e);
  };
  const updateTask = async (e) => {
    console.log(e);
  };
  const editTask = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="container ">
        <div className="">
          <div className="">
            <div className="acctions-container d-flex flex-column w-25">
              <button className="my-2 btn btn-primary ">
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i> Add
                New task
              </button>
              <button className="my-2 btn btn-primary">
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i>{" "}
                Filter by Descrip
              </button>

              <button className="my-2 btn btn-primary">
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i>{" "}
                Filter Date
              </button>
            </div>
            <div className="row d-flex justify-content-around">
              <AddTasks addTask={addTask} />
              <UpdateTasks updateTask={updateTask} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="row ">
              <Task deleteTask={deleteTask} editTask={editTask} />
              <Task deleteTask={deleteTask} editTask={editTask} />
              <Task deleteTask={deleteTask} editTask={editTask} />
              <Task deleteTask={deleteTask} editTask={editTask} />
              <Task deleteTask={deleteTask} editTask={editTask} />
              <Task deleteTask={deleteTask} editTask={editTask} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
