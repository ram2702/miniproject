import React from "react";
import Navbar from "./navBar";
// import { Bar } from "chart.js";
import "../css/bigthree.css";

const arr = 2;
export default function Bigthree() {
  return (
    <>
      <div className="mainpagebg">
        <Navbar arr={arr} />
        <div className="big--container">
          <div className="big--sub-container">
            <h2>Last Entered Meal: </h2>
          </div>
        </div>
      </div>
    </>
  );
}
