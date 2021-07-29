import React from "react";
import { useGlobalContext } from "../../context";

const Match = ({ match, team }) => {
  const { groups } = useGlobalContext();

  let teams = [];
  groups.forEach((element) => {
    element.teams.forEach((team) => {
      teams.push(team);
    });
  });

  const findFullName = (teams, match) => {
    let name;
    teams.forEach((team) => {
      if (team.code === match) {
        name = team.name;
      }
    });
    return name;
  };

  return (
    <div
      className={
        (team === match.home_team || team === match.away_team) ? "match" : undefined
      }
    >
      <div className="basic-match-info">
        {(team === match.home_team || team === match.away_team) ?
          `${findFullName(teams, match.home_team)} ${match.home_result} - ${
            match.away_result
          } ${findFullName(teams, match.away_team)}` : undefined}
      </div>
      <div className="stadium-info">
        {(team === match.home_team || team === match.away_team) ?
          `${match.date.slice(0, 10)} ${match.stadium}` : undefined}
      </div>
    </div>
  );
};

export default Match;
