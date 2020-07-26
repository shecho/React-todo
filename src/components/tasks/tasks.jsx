import React, { useState, useEffect } from "react";
import Task from "../task/task";
import './tasks.css'
const Tasks = (props) => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
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

  return (
    <>
      <div className="container">
        <div className="headerTasks">
          <div className="d-flex flex-column">
            <div className="">
              <button className="w-100 btn btn-primary btn-large">
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i>{" "}
              </button>
              <button className="w-100 btn btn-primary btn-large">
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i>{" "}
              </button>
 
            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
