import React from "react";
import { Link } from "react-router-dom";
import Logo from "../data/logo.png";

const Error = () => {
  return (
    <div className="error">
      <div className="error-section">
        <img src={Logo} alt="Euro 2020 logo" className="error-logo" />
        <h2 className="error-info">Oops! Something went wrong</h2>
        <Link to="/" className="error-btn">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
