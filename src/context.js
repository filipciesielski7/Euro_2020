import React, { useContext, useReducer, useEffect } from "react";
import groups from "./data-groups";
import flags from "./data-flags";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  groups: groups,
  loading: false,
  flags: [],
  teams: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    addFlags();
    addTeams();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
