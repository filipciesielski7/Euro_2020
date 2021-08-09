import React from "react";
import { Link } from "react-router-dom";
import Logo from "../data/UEFA-EURO-2020.png";

const Error = () => {
  return (
    <div className="error">
      <div className="error__container">
        <img src={Logo} alt="UEFA-Euro-2020 logo" className="error__logo" />
        <h2 className="error__info">Oops! Something went wrong</h2>
        <Link to="/" className="error__btn">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
