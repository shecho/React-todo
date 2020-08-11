import React from "react";
import "./pagination.css";
const Pagination = () => {
  return (
    <div>
      <div className="pagination">
        <button  className="prev">
          <i className="fa fa-angle-left"></i>
        </button>
        <button  className="num ">
          1
        </button>
        <button  className="num">
          2
        </button>
        <button  className="num">
          3
        </button>
        <button  className="num">
          4
        </button>
        <button className="num">
          5
        </button>
        <button href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
export default Pagination;
