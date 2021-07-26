import React from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const Team = () => {
  const { code } = useParams();
  const { teams, flags } = useGlobalContext();

  let name, group;
  teams.forEach((team) => {
    if (team.code === code) {
      name = team.name;
      group = team.group_name;
    }
  });

  let symbol;
  flags.forEach((element) => {
    if (element.name === name) {
      symbol = element.symbol;
    }
  });
  let flagUrl;
  if (symbol !== undefined) {
    flagUrl = `https://flagcdn.com/h240/${symbol.replace(/_/g, "-")}.png`;
  }

  return (
    <div className="single-team-container">
      <div className="single-team-section">
        <Link to="/" className="single-team-btn">
          <div className="back-icon">
            <FaBackward />
          </div>
          <span className="back-info">Back Home</span>
        </Link>
        <div className="subnav">
          <div className="single-team-title">
            <h2 className="single-team-name">{name}</h2>
            <h2 className="single-team-code">{code}</h2>
            <h2 className="single-team-group">{group}</h2>
          </div>
          <div
            className="single-team-team"
            style={{
              backgroundImage: `url(${flagUrl})`,
            }}
          ></div>
        </div>
        <div className="sub-main"></div>
      </div>
    </div>
  );
};

export default Team;
