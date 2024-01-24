import React from "react";
import "./Pagination.css";
const Pagination = ({ currentPage, hangleActivePage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => hangleActivePage(1)}
        className={`${currentPage === 1 ? "active" : ""}`}
      >
        1
      </button>
      <button
        onClick={() => hangleActivePage(2)}
        className={`${currentPage === 2 ? "active" : ""}`}
      >
        2
      </button>
    </div>
  );
};

export default Pagination;
