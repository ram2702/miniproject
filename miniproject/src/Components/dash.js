import React from "react";
import DashBoard from "./dashBoard";
import DashHome from "./dashHome";
import DashRegion from "./dashRegion";
import NavBar from "./navBar";
const arr = 1;

export default function Dash(propsforDash) {
  const homeprops = [
    propsforDash.propsforDash[0],
    propsforDash.propsforDash[1],
  ];
  return (
    <div className="mainpagebg">
      <NavBar arr={arr} />
      <DashBoard props={homeprops} />
    </div>
  );
}
