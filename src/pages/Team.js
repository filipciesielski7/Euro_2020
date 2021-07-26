import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const Team = () => {
  const { code } = useParams();
  const { teams } = useGlobalContext();
  let name, group;
  teams.forEach((team) => {
    if (team.code === code) {
      name = team.name;
      group = team.group_name;
    }
  });

  return (
    <div className="single-team-container">
      <div className="single-team-section">
        <Link to="/" className="single-team-btn">
          Back Home
        </Link>
        <div className="single-team-title">
          <h2 className="single-team-name">{name}</h2>
          <h2 className="single-team-code">{code}</h2>
          <h2 className="single-team-group">{group}</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
