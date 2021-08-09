import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Standings from "./standings";
import Matches from "./matches";
// import Squads from "./squads";

const Team = () => {
  const { code } = useParams();
  const [active, setActive] = useState(1);

  const handleActiveBarChange = (index) => {
    setActive(index);
  };

  return (
    <div className="team">
      <div className="team__section">
        <Link to="/" className="team__btn">
          <div className="team__back-icon">
            <FaBackward />
          </div>
          <span className="team__back-info">Back Home</span>
        </Link>
        <Navbar code={code} />
        <div className="team__main">
          <div className="team__main-navbar">
            <div
              className={`team__main-navbar-element ${
                active === 1 ? "team__main-navbar-element--clicked" : ""
              }`}
              onClick={() => handleActiveBarChange(1)}
            >
              <p>Standings</p>
            </div>
            <div
              className={`team__main-navbar-element ${
                active === 2 ? "team__main-navbar-element--clicked" : ""
              }`}
              onClick={() => handleActiveBarChange(2)}
            >
              <p>Matches</p>
            </div>
            {/* <div
              className={`team__main-navbar-element ${
                active === 3 ? "team__main-navbar-element--clicked" : ""
              }`}
              onClick={() => handleActiveBarChange(3)}
            >
              <p>Squad</p>
            </div> */}
          </div>

          <div
            className={`team__main-section ${
              active === 1 ? "" : "team__main-section--none"
            }`}
          >
            <Standings code={code} />
          </div>
          <div
            className={`team__main-section ${
              active === 2 ? "" : "team__main-section--none"
            }`}
          >
            <Matches code={code} />
          </div>
          {/* <div className={`team__main-section ${active === 3 ? "" : "team__main-section--none"}`}>
            <Squads code={code} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
