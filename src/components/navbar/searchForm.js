import React, { useRef } from "react";
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchTeam = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your team</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchTeam}
            className="search-input"
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
