import React from "react";

const Pagination = ({ logsPerPage, totalLogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="center">
      <div className="flex-pages">
        {pageNumbers.map((number) => (
          <div
            className="page-item"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
