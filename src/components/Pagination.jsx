import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex justify-between p-2"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)", color: "#fff", zIndex: 10 }}
    >
      {/* Adjusted bottom positioning to overlap with the footer */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`px-2 py-1 rounded text-white text-sm disabled:opacity-50 ${
          page === 1 ? "bg-orange-500" : "bg-orange-500"
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-2 py-1 rounded text-white text-sm bg-orange-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
