import React from "react";
import DashBoard from "./dashBoard";
import DashHome from "./dashHome";
import DashRegion from "./dashRegion";
import NavBar from "./navBar";
import image from "../Images/E.gif";
import image1 from "../Images/pexels-prateek-katyal-2740955.jpg";
import image2 from "../Images/D.gif";
import image3 from "../Images/t.gif";
const arr = 1;
let bgArr = [image, image1, image2, image3];
let index = 0;
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
