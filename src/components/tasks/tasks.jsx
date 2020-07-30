import React, { useState, useEffect } from "react";
import Task from "../task/task";
import "./tasks.css";
import AddTasks from "../forms/addTask";
import UpdateTasks from "../forms/updateTask";
import SearchTasks from "../forms/search";
import DateFilter from "../forms/dateFilter";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [updateData, setUpdateData] = useState({});
  let [showForm, setShowForm] = useState(true);
  let [showEditForm, setShowEditForm] = useState(true);
  let [showDateForm, setShowDateForm] = useState(true);
  let [searchTastks, setSearchTasks] = useState({});
  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    // let url = `https://academlo-todolist.herokuapp.com/tasks`;
    // console.log(url);
    // let response = await fetch(url);
    // console.log("response");
  };

  const handleInput = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleUpdateInput = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log(updateData);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchTasks({ ...searchTastks, [e.target.name]: e.target.value });
    console.log(searchTastks);
  };
  const addTask = async (e) => {
    // console.log(e);
    e.preventDefault();
    const url = "https://academlo-todolist.herokuapp.com/tasks/";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newTask),
    });
    // let response = res.json();
    console.log(res);
    res.status > 400 ? alert("Llena todos los campos") : alert("Todo ok");
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

  let handleTogleShow = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const handleTogleEditShow = (e) => {
    e.preventDefault();
    setShowEditForm(!showEditForm);
  };
  const handleTogleDateForm = (e) => {
    e.preventDefault();
    setShowDateForm(!showDateForm);
  };
  const panelContainerStyles = {
    position: "absolute",
    top: "0",
    left: "0",
  };

  return (
    <>
      <div className="container ">
        <div className="">
          <div className="">
            <div style={panelContainerStyles} className="">
              <button
                className="m-2 btn btn-primary "
                onClick={(e) => handleTogleShow(e)}
              >
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i> Add
                New task
              </button>

              <button
                className="m-2 btn btn-primary"
                onClick={(e) => handleTogleDateForm(e)}
              >
                <i className="h1 fa fa-plus-circle" aria-hidden="true"></i>{" "}
                Filter Date
              </button>

              {/* <button className="m-2 btn btn-primary"> */}
              {/* <i className="h1 fa fa-filter" aria-hidden="true"></i>{" "} */}
              {/* Filter by Desc */}
              {/* </button> */}
            </div>
            <div className="mt-5 pt-5 row d-flex justify-content-around">
              <AddTasks
                addTask={addTask}
                showForm={showForm}
                handleInput={handleInput}
              />
              <UpdateTasks
                handleUpdateInput={handleUpdateInput}
                updateTask={updateTask}
                showEditForm={showEditForm}
              />
              <SearchTasks
                searchTastks={searchTastks}
                handleSearchInput={handleSearchInput}
              />
              <DateFilter showDateForm={showDateForm} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="row ">
              <Task
                deleteTask={deleteTask}
                editTask={editTask}
                handleTogleEditShow={handleTogleEditShow}
                showEditForm={showEditForm}
              />
              <Task
                deleteTask={deleteTask}
                editTask={editTask}
                handleTogleEditShow={handleTogleEditShow}
                showEditForm={showEditForm}
              />
              <Task
                deleteTask={deleteTask}
                editTask={editTask}
                handleTogleEditShow={handleTogleEditShow}
                showEditForm={showEditForm}
              />
              <Task
                deleteTask={deleteTask}
                editTask={editTask}
                handleTogleEditShow={handleTogleEditShow}
                showEditForm={showEditForm}
              />

              <Task
                deleteTask={deleteTask}
                editTask={editTask}
                handleTogleEditShow={handleTogleEditShow}
                showEditForm={showEditForm}
              />
              <Task
                deleteTask={deleteTask}
                editTask={editTask}
                handleTogleEditShow={handleTogleEditShow}
                showEditForm={showEditForm}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
