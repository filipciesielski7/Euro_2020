import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import { Hint } from "react-autocomplete-hint";

const SearchForm = () => {
  const { searchTerm, setSearchTerm, teams } = useGlobalContext();
  const searchValue = useRef("");

  var hintArray = teams.map((team) => team.name);
  console.log(hintArray);

  const searchTeam = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <>
      <form className="search-form">
        <div className="form-control">
          {/* <form className="input-form"> */}
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
                value={searchTerm}
              />
            </Hint>
          {/* </form> */}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
