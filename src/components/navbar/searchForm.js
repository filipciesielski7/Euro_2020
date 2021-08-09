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
      <form className="navbar__search">
        <div className="navbar__form">
          <label htmlFor="name" className="navbar__label">Search your team</label>
          <Hint options={hintArray} allowTabFill>
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchTeam}
              className="navbar__input"
              placeholder="Team name"
              autoComplete="off"
              value={searchTerm}
            />
          </Hint>
          <div className="navbar__delete" onClick={() => handleDelete()}>
            <FiDelete />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
