import React from "react";
import { useGlobalContext } from "../../context";

const Standings = ({ code }) => {
  const { teams, groups, groups2 } = useGlobalContext();

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

  groups.forEach((element) => {
    if (element.name === group) {
      element.teams.forEach((team) => {
        if (winner === team.code) {
          winner = team.name;
        }
        if (runnerup === team.code) {
          runnerup = team.name;
        }
        if (thirdplace === team.code) {
          thirdplace = team.name;
        }
        if (fourthplace === team.code) {
          fourthplace = team.name;
        }
      });
    }
  });

  return (
    <div className="standings">
      <div className="standings-container">
        <h3 className="winner">1. {winner}</h3>
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
