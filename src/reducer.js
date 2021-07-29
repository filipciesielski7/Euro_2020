const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "STOP_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "ADD_DATA") {
    return {
      ...state,
      stadiums: action.payload.stadiums,
      tvchannels: action.payload.tvchannels,
      groups2: action.payload.groups,
      knockoutphases: action.payload.knockoutphases,
      round16: action.payload.knockoutphases.round16.matches,
      round8: action.payload.knockoutphases.round8.matches,
      round4: action.payload.knockoutphases.round4.matches,
      round2: action.payload.knockoutphases.round2.matches,
      matches: action.payload.matches,
    };
  }
  if (action.type === "ADD_FLAG") {
    return {
      ...state,
      flags: [...state.flags, action.payload],
    };
  }
  if (action.type === "ADD_TEAMS") {
    return {
      ...state,
      teams: [...state.teams, action.payload],
    };
  }
  if (action.type === "DELETE_TEAMS") {
    return {
      ...state,
      teams: [],
    };
  }
  throw new Error("no matching action type");
};

export default reducer;
