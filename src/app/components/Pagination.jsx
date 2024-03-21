"use client";

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Always show the first page number
    pageNumbers.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`border ${currentPage === 1 ? "font-bold" : "font-normal"} 
                    ${currentPage === 1 ? "border-[#FAAF3D]" : "border-white"} 
                    bg-transparent px-4 py-2`}
      >
        1
      </button>
    );

    // Show the second page number if there are at least two pages
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={2}
          onClick={() => onPageChange(2)}
          className={`border ${currentPage === 2 ? "font-bold" : "font-normal"} 
                      ${
                        currentPage === 2 ? "border-[#FAAF3D]" : "border-white"
                      } 
                      bg-transparent px-4 py-2`}
        >
          2
        </button>
      );
    }

    // Show an ellipsis if there are more than three pages
    if (totalPages > 3) {
      pageNumbers.push(<span key="ellipsis">...</span>);
    }

    // Show the last page number if there are at least three pages
    if (totalPages > 2) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`border rounded ${
            currentPage === totalPages ? "font-bold" : "font-normal"
          } 
                      ${
                        currentPage === totalPages
                          ? "border-[#FAAF3D]"
                          : "border-white"
                      } 
                      bg-transparent px-4 py-2`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-end gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
