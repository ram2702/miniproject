import React from "react";
import "../css/dashstyle.css";
import ProgressDiv from "./progressdiv.js";
import { workOutData, dietData } from "../Data/workoutDashData";
import { Link } from "react-router-dom";
const userName = "User";
export default function DashHome() {
  return (
    <div className="dash">
      <h1 className="heading">Welcome Back {userName}!</h1>
      <div className="main--sec">
        <div className="sec--one">
          <ProgressDiv progData={dietData} />
          <ProgressDiv progData={workOutData} />
        </div>
        <div className="sub--sec">
          <div className="solobg sub--one">
            <h3 className="progresstext">
              {" "}
              <Link to="/DietMonitor">DietMonitor</Link>{" "}
            </h3>
          </div>
          <div className="solobg sub--two">
            <h3 className="progresstext"> WorkoutTab </h3>
          </div>
          <div className="solobg sub--three">
            <h3 className="progresstext"> DietTracker</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
