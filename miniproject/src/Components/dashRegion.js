import React from "react";
import "../css/dashstyle.css";
export default function DashRegion() {
  return (
    <div className="dash">
      <h1 className="heading pre">Choose your Diet Region</h1>
      <h2 className="dietitem south">Southern Diet</h2>
      <h2 className="dietitem north">Northern Diet</h2>
      <h2 className="dietitem generic">Generic Diet</h2>
    </div>
  );
}
