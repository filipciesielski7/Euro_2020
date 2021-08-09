import React from "react";
import { useGlobalContext } from "../../context";

const Match = ({ match, team, stage }) => {
  const { groups, stadiums } = useGlobalContext();

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

  let stadium_name, stadium_city;
  stadiums.forEach((stadium) => {
    if (stadium.id === match.stadium) {
      stadium_name = stadium.name;
      stadium_city = stadium.city;
    }
  });

  return (
    <div
      className={
        team === match.home_team || team === match.away_team
          ? "match"
          : undefined
      }
    >
      <div className="match__info">
        {team === match.home_team || team === match.away_team
          ? `${findFullName(teams, match.home_team)} ${match.home_result} - ${
              match.away_result
            } ${findFullName(teams, match.away_team)}\n`
          : undefined}
      </div>
      <div className="match__info match__penalties">
        {(team === match.home_team || team === match.away_team) &&
        match.home_result === match.away_result &&
        stage !== "group"
          ? `${match.home_penalty} : ${match.away_penalty} on penalties`
          : undefined}
      </div>
      <div className="match__stadium">
        {team === match.home_team || team === match.away_team
          ? `${match.date.slice(0, 10)} ${stadium_name}, ${stadium_city}`
          : undefined}
      </div>
    </div>
  );
};

export default Match;
