import React from "react";
import DashBoard from "./dashBoard";
import NavBar from "./navBar";
const arr = 1;
export default function dash() {
  return (
    <div className="mainpagebg">
      <NavBar arr={arr} />
      <DashBoard />
    </div>
  );
}
