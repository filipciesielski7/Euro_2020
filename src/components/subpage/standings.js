import React from "react";
import { useGlobalContext } from "../../context";

const Standings = ({ code }) => {
  const { teams, groups2 } = useGlobalContext();

  let group;
  teams.forEach((team) => {
    if (team.code === code) {
      group = team.group_name;
    }
  });

  const this_group = groups2.filter((group_item) => group_item.name === group);

  let winner, runnerup, thirdplace, fourthplace;
  if (this_group[0] !== undefined) {
    winner = this_group[0].winner;
    runnerup = this_group[0].runnerup;
    thirdplace = this_group[0].thirdplace;
    fourthplace = this_group[0].fourthplace;
  }

  // ADD NAMES INSTEAD OF CODES

  return (
    <div className="standings">
      <div className="standings-container">
        <h3>1. {winner}</h3>
        <h3>2. {runnerup}</h3>
        <h3>
          <span className="out">3.</span> {thirdplace}
        </h3>
        <h3>
          <span className="out">4.</span> {fourthplace}
        </h3>
      </div>
    </div>
  );
};

export default Standings;
