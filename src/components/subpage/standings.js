import React from "react";
import { useGlobalContext } from "../../context";

const Standings = ({ code }) => {
  const { teams, groups, groups2, round16 } = useGlobalContext();

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

  let isPlayingInRound16 = false;
  round16.forEach((match) => {
    if (match.home_team === thirdplace || match.away_team === thirdplace) {
      isPlayingInRound16 = true;
    }
  });

  let page_team;
  groups.forEach((element) => {
    if (element.name === group) {
      element.teams.forEach((team) => {
        if (winner === team.code) {
          if (winner === code) {
            page_team = team.name;
          }
          winner = team.name;
        }
        if (runnerup === team.code) {
          if (runnerup === code) {
            page_team = team.name;
          }
          runnerup = team.name;
        }
        if (thirdplace === team.code) {
          if (thirdplace === code) {
            page_team = team.name;
          }
          thirdplace = team.name;
        }
        if (fourthplace === team.code) {
          if (fourthplace === code) {
            page_team = team.name;
          }
          fourthplace = team.name;
        }
      });
    }
  });

  let third_place = "outh";
  if (isPlayingInRound16) {
    third_place = "";
  }

  return (
    <>
      <div className="final-table">Final Table</div>
      <div className="standings">
        <div className="standings-container">
          <h3 className={winner === page_team ? "underline" : ""}>
            1. {winner}{" "}
          </h3>
          <h3 className={runnerup === page_team ? "underline" : ""}>
            2. {runnerup}{" "}
          </h3>
          <h3
            className={
              thirdplace === page_team
                ? `${third_place} underline`
                : `${third_place}`
            }
          >
            <span className="out">3.</span> {thirdplace}
          </h3>
          <h3 className={fourthplace === page_team ? "outh underline" : "outh"}>
            <span className="out">4.</span> {fourthplace}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Standings;
