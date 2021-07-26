import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Team = ({ team }) => {
  const { flags } = useGlobalContext();
  // const { group_name, name, code } = team;
  const { name, code } = team;

  let symbol;
  flags.forEach((element) => {
    if (element.name === name) {
      symbol = element.symbol;
    }
  });
  const flagUrl = `https://flagcdn.com/h240/${symbol.replace(/_/g, "-")}.png`;

  return (
    <Link
      to={`/team/${code}`}
      className="team-link"
    >
      <div>
        <div
          className="team"
          style={{
            backgroundImage: `url(${flagUrl})`,
          }}
        ></div>
        <div className="name">
          <span className="name-span">{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Team;
