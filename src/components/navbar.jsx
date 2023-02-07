import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

// Stateless Functional Component
function Navbar({ totalCounters }) {
  return (
    <nav className="navbar bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <span className="text-light navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge bg-secondary badge-pill m-1">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
