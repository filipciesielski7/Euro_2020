import React from "react";
import Match from "./match";
import { useGlobalContext } from "../../context";

const Matches = ({ code }) => {
  const { matches, groups } = useGlobalContext();

  // let all_info, matches2;
  let all_info;
  groups.forEach((element) => {
    element.teams.forEach((team) => {
      if (team.code === code) {
        matches.forEach((matches_element) => {
          if (matches_element[0] === element.name) {
            // matches2 = matches_element[1];
            all_info = {
              matches: matches_element[1],
              name: team.name,
              group: element.name,
              code: code,
            };
          }
        });
      }
    });
  });
  console.log(all_info);

  // ADD KOCKOUTSTAGE MATCHES

  return (
    <div className="matches-container">
      Group Stage
      {all_info && all_info.matches.map((match) => {
        return <Match key={`${match.id}${match.home_team}`} match={match} team={code} group={all_info.group}/>;
      })}
    </div>
  );
};

export default Matches;
