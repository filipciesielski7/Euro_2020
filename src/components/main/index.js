import React from "react";
import Group from "./group";
import { useGlobalContext } from "../../context";
import { Default } from "react-awesome-spinners";

const Main = () => {
  const { loading, teams } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="main main--loading">
          <Default color="#0084A4" size="64" sizeUnit="px" className="main__loader" />
        </div>
      </main>
    );
  }

  if (teams.length < 1) {
    return (
      <main>
        <div className="main main--no-results">
          <h2>No teams matched your search criteria</h2>
        </div>
      </main>
    );
  }

  return (
    <div className="main">
      <Group />
    </div>
  );
};

export default Main;
