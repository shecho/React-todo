import React, { useState, useEffect } from "react";
import Task from '../task/task';
const Tasks = (props) => {
  const [tasks, setTasks] = useState()

    useEffect(() => {
    getTasks()
  }, []);


  const getTasks = async () => {
    let url = `https://academlo-todolist.herokuapp.com/tasks`;
    // console.log(url);
    let response = await fetch(url);
    console.log(response);

  };
  return (
    <div className="row">
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default Tasks;
