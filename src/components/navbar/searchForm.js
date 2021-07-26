import React, { useRef } from "react";
import { useGlobalContext } from "../../context";
import { Hint } from "react-autocomplete-hint";

const SearchForm = () => {
  const { setSearchTerm, teams } = useGlobalContext();
  const searchValue = useRef("");

  var hintArray = teams.map((team) => team.name);
  console.log(hintArray);

  const searchTeam = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your team</label>
          <Hint options={hintArray} allowTabFill>
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchTeam}
              className="search-input"
              placeholder="team name"
              autoComplete="off"
            />
          </Hint>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
