import React from "react";
import { Link } from "react-router-dom";

const notFoundPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(to bottom, #3498db, #2c3e50)",
  color: "#fff",
  fontSize: "24px",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "4rem",
  marginBottom: "20px",
};

const subheadingStyle = {
  fontSize: "1.5rem",
};

const Nopage = () => {
  return (
    <div style={notFoundPageStyle}>
      <div>
        <h1 style={headingStyle}>404 - Page Not Found</h1>
        <p style={subheadingStyle}>
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="bg-green-800 px-5 mt-7 py-2 rounded-xl ">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nopage;
