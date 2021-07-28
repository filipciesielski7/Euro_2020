import React from "react";
import { useGlobalContext } from "../../context";

const Matches = ({ code }) => {
  const { matches, groups } = useGlobalContext();

  let all_info;
  groups.forEach((element) => {
    element.teams.forEach((team) => {
      if (team.code === code) {
        console.log(team.name, element.name, code);
        matches.forEach((matches_element) => {
          if (matches_element[0] === element.name) {
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

  return <div>matchesvb</div>;
};

export default Matches;
