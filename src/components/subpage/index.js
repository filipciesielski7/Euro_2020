import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Navbar from "./navbar";

const Team = () => {
  const { code } = useParams();
  const { teams, groups2 } = useGlobalContext();
  const [active, setActive] = useState(1);

  let group;
  teams.forEach((team) => {
    if (team.code === code) {
      group = team.group_name;
    }
  });

  const this_group = groups2.filter(
    (group_item) => group_item.name.toUpperCase() === group.toUpperCase()
  );

  if (this_group[0] !== undefined) {
    const { winner, runnerup, thirdplace, fourthplace, matches } =
      this_group[0];
    console.log(winner, runnerup, thirdplace, fourthplace, matches);
  }

  const handleActiveBarChange = (index) => {
    setActive(index);
  };

  return (
    <div className="single-team-container">
      <div className="single-team-section">
        <Link to="/" className="single-team-btn">
          <div className="back-icon">
            <FaBackward />
          </div>
          <span className="back-info">Back Home</span>
        </Link>
        <Navbar code={code} />
        <div className="sub-main">
          <div className="sub-main-nav">
            <div
              className={`sub-main-nav-element ${
                active === 1 ? "sub-main-nav-element-clicked" : ""
              }`}
              onClick={() => handleActiveBarChange(1)}
            >
              <p>Standings</p>
            </div>
            <div
              className={`sub-main-nav-element ${
                active === 2 ? "sub-main-nav-element-clicked" : ""
              }`}
              onClick={() => handleActiveBarChange(2)}
            >
              <p>Matches</p>
            </div>
            <div
              className={`sub-main-nav-element ${
                active === 3 ? "sub-main-nav-element-clicked" : ""
              }`}
              onClick={() => handleActiveBarChange(3)}
            >
              <p>Squad</p>
            </div>
          </div>

          <div className={`sub-main-major ${active === 1 ? "" : "major-none"}`}>
            STANDINGS
          </div>
          <div className={`sub-main-major ${active === 2 ? "" : "major-none"}`}>
            MATCHES
          </div>
          <div className={`sub-main-major ${active === 3 ? "" : "major-none"}`}>
            SQUAD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
