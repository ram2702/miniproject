import React from "react";
import "../css/dashstyle.css";
import DashHome from "./dashHome";
import DashRegion from "./dashRegion";
import DashGoal from "./dashGoal";
import { Link } from "react-router-dom";
export default function DashBoard(props) {
  console.log(props);
  const [isActive, setIsActive] = React.useState(props.props[1]);
  const [signOutActive, setsignOutActive] = React.useState(0);
  const [dashElement, setdashElement] = React.useState(props.props[0]);

  const handleClick = (event) => {
    setIsActive(0);

    setdashElement(<DashHome />);
  };
  const handleClick1 = (event) => {
    setIsActive(1);

    setdashElement(<DashRegion />);
  };
  const handleClick2 = (event) => {
    setIsActive(2);

    setdashElement(<DashGoal />);
  };
  const handleClick3 = (event) => {
    setsignOutActive(1);
  };
  const handleClick4 = (event) => {
    setsignOutActive(0);
  };
  return (
    <div className="container  ">
      <div className="container--menu">
        <h2
          className={isActive === 0 ? "menuselect" : ""}
          onClick={handleClick}
        >
          Home
        </h2>
        <hr />
        <h2
          className={isActive === 1 ? "menuselect" : ""}
          onClick={handleClick1}
        >
          Select Region
        </h2>
        <hr />
        <h2
          className={isActive === 2 ? "menuselect" : ""}
          onClick={handleClick2}
        >
          Goal Settings
        </h2>
        <hr />
        <h2
          className={signOutActive === 1 ? "menuselect" : ""}
          onMouseEnter={handleClick3}
          onMouseLeave={handleClick4}
        >
          <Link to="/home">Sign Out</Link>
        </h2>
      </div>
      {dashElement}
    </div>
  );
}
