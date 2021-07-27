import React, { useRef, useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { useGlobalContext } from "../../context";
import { Hint } from "react-autocomplete-hint";

const SearchForm = () => {
  const { searchTerm, setSearchTerm, teams } = useGlobalContext();
  const searchValue = useRef("");

  var hintArray = teams.map((team) => team.name);

  const searchTeam = () => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleDelete = () => {
    setSearchTerm('')
    searchValue.current.value = '';
    searchValue.current.focus();
  };

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
          <div className="del-text" onClick={() => handleDelete()}>
            <FiDelete />
          </div>
          {/* </form> */}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
