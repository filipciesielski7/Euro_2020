import React from "react";
import { useGlobalContext } from "../../context";

const Navbar = ({ code }) => {
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
    <div className="team__navbar">
      <div className="team__navbar-info">
        <h2 className="team__navbar-name">{name}</h2>
        <h2 className="team__navbar-code">{code}</h2>
        <h2 className="team__navbar-group">{group}</h2>
      </div>
      <div
        className="team__navbar-flag"
        style={{
          backgroundImage: `url(${flagUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Navbar;
