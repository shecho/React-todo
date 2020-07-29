import React from "react";

const UpdateTask = (props) => {
  return (
    <>
      <div className={` text-center ${props.showEditForm ? '' : 'd-none'}`}>
        <h4> Update Task</h4>
        <form onInput={props.handleUpdateInput} onSubmit={(e) => props.updateTask(e)}>
          <div className="form-group">
            <input
              className="form-control"
              name="content"
              type="text"
              placeholder="Content"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              capture
              name="date"
              type="date"
              placeholder="Apellido"
            />
          </div>
          <input className="btn btn-success btn-block" type="submit" />
        </form>
      </div>
    </>
  );
};
export default UpdateTask
