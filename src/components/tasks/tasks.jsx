import React, { useState, useEffect } from "react";
import Task from "../task/task";
import "./tasks.css";
import AddTasks from "../forms/addTask";
import UpdateTasks from "../forms/updateTask";
import SearchTasks from "../forms/search";
import DateFilter from "../forms/dateFilter";
import Pagination from "../pagination/pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasks = () => {
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState({});
  let [updateData, setUpdateData] = useState({});
  let [showForm, setShowForm] = useState(false);
  let [showEditForm, setShowEditForm] = useState(false);
  let [showDateForm, setShowDateForm] = useState(false);
  let [searchTastks, setSearchTasks] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const addTaskToast= (message) => toast(message);
  const getTasks = async () => {
    let url = `https://academlo-todolist.herokuapp.com/tasks`;
    let response = await fetch(url);
    let res = await response.json();
    let tasksList = res.results;
    setTasks(tasksList);
  };

  const handleInput = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
    // console.log(newTask);
  };
  const handleUpdateInput = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    // console.log(updateData);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchTasks(e.target.value);
    console.log(searchTastks);
  };
  const addTask = async (e) => {
    e.preventDefault();
    // let page = 1;
    // let limit = 25;
    // const urlQueryExample = `https://academlo-todolist.herokuapp.com/tasks?page=0&limit=50`;
    // const urlQuery = `https://academlo-todolist.herokuapp.com/tasks?page=${page}&limit=${limit}`;
    // console.log(urlQueryExample, urlQueryExample);
    const url = "https://academlo-todolist.herokuapp.com/tasks/";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newTask),
    });
    // let response = res.json();
    // console.log(res);
    res.status >= 400 ? addTaskToast("llena los campos") : addTaskToast("TODO OK");
    getTasks();
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
  const formsContianerStyles = {
    position: "relative",
    top: "15vh",
    rith: "",
  };
  return (
    <>
      {/* <div className=""> */}
      <div className="">
        <div className="d-flex">
          <div style={panelContainerStyles} className="text-center">
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
              <i className="h1 fa fa-filter" aria-hidden="true"></i> Filter Date
            </button>

            <div className="container p-5" style={formsContianerStyles}>
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
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 row">
        <div className="col-md-12">
          <div className="">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <Pagination />
              <DateFilter showDateForm={showDateForm} />
              <SearchTasks
                searchTastks={searchTastks}
                handleSearchInput={handleSearchInput}
              />
            </div>
            <div>
              <ToastContainer />
            </div>
            {tasks
              .filter((tasks) =>
                tasks.content.toLowerCase().includes(searchTastks)
              )
              .map((task, id) => {
                return (
                  <Task
                    getTasks={getTasks}
                    task={task}
                    key={id}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    handleTogleEditShow={handleTogleEditShow}
                    handleUpdateInput={handleUpdateInput}
                    showEditForm={showEditForm}
                  />
                );
              })}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Tasks;
