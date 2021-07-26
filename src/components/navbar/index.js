import React from "react";
import SearchForm from "./searchForm";
import Logo from "../../data/UEFA-EURO-2020.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={Logo} alt="Euro 2020 logo" className="navbar-logo" />
        <SearchForm />
    </div>
  );
};

export default Navbar;
