import React from "react";
import Group from "./group";
import { useGlobalContext } from "../../context";
import { Default } from "react-awesome-spinners";

const Main = () => {
  const { loading, teams } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="main-container main_container-loading">
          <Default color="#0084A4" size="64" sizeUnit="px" className="loader" />
        </div>
      </main>
    );
  }

  if (teams.length < 1) {
    return (
      <main>
        <div className="main-container main_container-no-results">
          <h2>No teams matched your search criteria</h2>
        </div>
      </main>
    );
  }

  return (
    <div className="main-container">
      <Group />
    </div>
  );
};

export default Main;
