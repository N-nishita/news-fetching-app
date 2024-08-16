import React, { useState } from "react";

const Footer = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initial page

  // Update logic for currentPage based on your application

  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "#fff",
        padding: "1rem 2rem",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div style={{ textAlign: "center" }}>Page {currentPage}</div>
      {/* Add any other footer elements here, e.g., copyright info */}
    </footer>
  );
};

export default Footer;
