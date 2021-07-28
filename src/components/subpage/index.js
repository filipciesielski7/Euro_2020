import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Standings from "./standings";
import Matches from "./matches";

const Team = () => {
  const { code } = useParams();
  const [active, setActive] = useState(1);

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
            <Standings code={code} />
          </div>
          <div className={`sub-main-major ${active === 2 ? "" : "major-none"}`}>
            <Matches code={code} />
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
