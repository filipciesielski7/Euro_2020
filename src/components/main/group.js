import React from "react";
import Team from "./team";

const Group = ({ group }) => {
  const { name, teams } = group;
  return (
    <div className="main">
      {teams.map((team) => {
        return <Team key={team.name} team={team} group={name} />;
      })}
    </div>
  );
};

export default Group;
