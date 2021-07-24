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
    <div>
      <div
        className="team"
        style={{
          backgroundImage: `url(${flagUrl})`,
        }}
      ></div>
      {/* <div className="title">
        <p>{name}</p>
        <p>{code}</p>
        <p>{group}</p>
      </div> */}
    </div>
  );
};

export default Team;
