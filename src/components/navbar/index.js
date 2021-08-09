import React from "react";
import SearchForm from "./searchForm";
import Logo from "../../data/UEFA-EURO-2020.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="UEFA-Euro-2020 logo" className="navbar__logo" />
      <SearchForm />
    </div>
  );
};

export default Navbar;
