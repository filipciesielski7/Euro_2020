import React from "react";
import Team from "./team";
import { useGlobalContext } from "../../context";

const Group = () => {
  const { teams } = useGlobalContext();
  return (
    <>
      {teams.map((team) => {
        return <Team key={team.code} team={team} />;
      })}
    </>
  );
};

export default Group;
