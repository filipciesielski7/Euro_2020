import React from "react";
import { useGlobalContext } from "../../context";

const Team = ({ team, group }) => {
  const { name, code } = team;
  const { flags } = useGlobalContext();
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
    <div
      className="team"
      style={{
        backgroundImage: `url(${flagUrl})`,
      }}
    >
      <p>{name}</p>
      <p>{code}</p>
      <p>{group}</p>
    </div>
  );
};

export default Team;
