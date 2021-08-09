import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Team = ({ team }) => {
  const { flags } = useGlobalContext();
  const { name, code } = team;

  let symbol;
  flags.forEach((element) => {
    if (element.name === name) {
      symbol = element.symbol;
    }
  });
  const flagUrl = `https://flagcdn.com/h240/${symbol.replace(/_/g, "-")}.png`;

  return (
    <Link to={`/team/${code}`} className="main__team-link">
      {/* <div> */}
      <div
        className="main__team-flag"
        style={{
          backgroundImage: `url(${flagUrl})`,
        }}
      ></div>
      <div className="main__team-name-container">
        <span className="main__team-name">{name}</span>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default Team;
