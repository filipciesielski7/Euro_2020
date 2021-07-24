import React from "react";
import { useGlobalContext } from "../../context";

const Team = ({ team }) => {
  const { flags } = useGlobalContext();
  const { group_name, name, code } = team;

  let symbol;
  flags.forEach((element) => {
    if (element.name === name) {
      symbol = element.symbol;
    }
  });
  const flagUrl = `https://flagcdn.com/h240/${symbol.replace(/_/g, "-")}.png`;

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
        <p>{group_name}</p>
      </div> */}
    </div>
  );
};

export default Team;
