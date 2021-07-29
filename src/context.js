import React, { useContext, useReducer, useEffect, useState } from "react";
import groups from "./data/data-groups";
import flags from "./data/data-flags";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  groups: groups,
  loading: true,
  flags: [],
  teams: [],
  display: ["teams"],
  stadiums: [],
  tvchannels: [],
  groups2: [],
  matches: [],
  round16: [],
  round8: [],
  round4: [],
  round2: [],
};

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/lsv/uefa-euro-2020/master/data.json"
      );
      const data = await response.json();
      const { stadiums, tvchannels, groups, knockoutphases } = data;
      const matches = groups.map((obj) => [obj.name, obj.matches]);
      dispatch({
        type: "ADD_DATA",
        payload: { stadiums, tvchannels, groups, matches, knockoutphases },
      });
      dispatch({ type: "STOP_LOADING" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "STOP_LOADING" });
    }
  };

  const addFlags = () => {
    dispatch({ type: "LOADING" });

    groups.map((item) =>
      item.teams.map((team) => {
        const item = flags.filter(
          (item) => Object.values(item)[0] === team.name
        );
        return dispatch({
          type: "ADD_FLAG",
          payload: { name: team.name, symbol: Object.keys(item[0])[0] },
        });
      })
    );
    dispatch({ type: "STOP_LOADING" });
  };

  const addTeams = () => {
    dispatch({ type: "LOADING" });
    dispatch({ type: "DELETE_TEAMS" });

    groups.map((group) => {
      const group_name = group.name;
      return group.teams.map((team) => {
        const { name, code } = team;
        return dispatch({
          type: "ADD_TEAMS",
          payload: { group_name, name, code },
        });
      });
    });
    dispatch({ type: "STOP_LOADING" });
  };

  useEffect(() => {
    fetchData();
    addFlags();
    addTeams();
  }, []);

  useEffect(() => {
    const updateTeams = () => {
      dispatch({ type: "LOADING" });
      dispatch({ type: "DELETE_TEAMS" });

      groups.map((group) => {
        const group_name = group.name;
        return group.teams.map((team) => {
          const { name, code } = team;
          if (name.toUpperCase().includes(searchTerm.toUpperCase())) {
            return dispatch({
              type: "ADD_TEAMS",
              payload: { group_name, name, code },
            });
          } else {
            return null;
          }
        });
      });
      dispatch({ type: "STOP_LOADING" });
    };

    updateTeams();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ ...state, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
