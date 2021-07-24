import React from "react";
import Group from "./group";
import { useGlobalContext } from "../../context";

const Main = () => {
  const { groups } = useGlobalContext();

  return (
    <main>
      <div className="main-container">
        {groups.map((group) => {
          return <Group key={group.name} group={group} />;
        })}
      </div>
    </main>
  );
};

export default Main;
