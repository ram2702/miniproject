import React from "react";
import Navbar from "./navBar";
// import { Bar } from "chart.js";
import "../css/bigthree.css";
import BarChart from "./BarChart.js";
import { UserData } from "../Data/workoutDashData";

const arr = 2;
export default function Bigthree() {
  const [userData, setUserData] = React.useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="mainpagebg">
        <Navbar arr={arr} />
        <div className="big--container">
          <div className="big--sub-container">
            <div className="big--chart">
              <BarChart props={userData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
