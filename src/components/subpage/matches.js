import React from "react";
import Match from "./match";
import { useGlobalContext } from "../../context";

const Matches = ({ code }) => {
  const { matches, groups, round16, round8, round4, round2 } =
    useGlobalContext();

  let all_info;
  groups.forEach((element) => {
    element.teams.forEach((team) => {
      if (team.code === code) {
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

  let isPlayingInRound16 = false;
  round16.forEach((match) => {
    if (match.home_team === code || match.away_team === code) {
      isPlayingInRound16 = true;
    }
  });
  let isPlayingInRound8 = false;
  round8.forEach((match) => {
    if (match.home_team === code || match.away_team === code) {
      isPlayingInRound8 = true;
    }
  });
  let isPlayingInRound4 = false;
  round4.forEach((match) => {
    if (match.home_team === code || match.away_team === code) {
      isPlayingInRound4 = true;
    }
  });
  let isPlayingInRound2 = false;
  round2.forEach((match) => {
    if (match.home_team === code || match.away_team === code) {
      isPlayingInRound2 = true;
    }
  });

  return (
    <div className="matches">
      <div className="matches__title">Group Stage</div>
      {all_info
        ? all_info.matches.map((match) => {
            return (
              <Match
                key={`${match.id}${match.home_team}`}
                match={match}
                team={code}
                group={all_info.group}
                stage="group"
              />
            );
          })
        : undefined}
      <div
        className={
          isPlayingInRound16 ? "matches__title" : "matches__title--none"
        }
      >
        Round 16
      </div>
      {round16
        ? round16.map((match) => {
            return (
              <Match
                key={`${match.id}${match.home_team}`}
                match={match}
                team={code}
                group={all_info.group}
                stage="16"
              />
            );
          })
        : undefined}
      <div
        className={
          isPlayingInRound8 ? "matches__title" : "matches__title--none"
        }
      >
        Quarterfinal
      </div>
      {round8
        ? round8.map((match) => {
            return (
              <Match
                key={`${match.id}${match.home_team}`}
                match={match}
                team={code}
                group={all_info.group}
                stage="8"
              />
            );
          })
        : undefined}
      <div
        className={
          isPlayingInRound4 ? "matches__title" : "matches__title--none"
        }
      >
        Semifinal
      </div>
      {round4
        ? round4.map((match) => {
            return (
              <Match
                key={`${match.id}${match.home_team}`}
                match={match}
                team={code}
                group={all_info.group}
                stage="4"
              />
            );
          })
        : undefined}
      <div
        className={
          isPlayingInRound2 ? "matches__title" : "matches__title--none"
        }
      >
        Final
      </div>
      {round2
        ? round2.map((match) => {
            return (
              <Match
                key={`${match.id}${match.home_team}`}
                match={match}
                team={code}
                group={all_info.group}
                stage="2"
              />
            );
          })
        : undefined}
    </div>
  );
};

export default Matches;
