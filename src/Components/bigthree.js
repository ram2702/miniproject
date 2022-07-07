import React from "react";
import Navbar from "./navBar";
import "../css/bigthree.css";
import { Dropdown } from "react-bootstrap";

const arr = 2;
export default function bigthree() {
  return (
    <>
      <div className="mainpagebg">
        <Navbar arr={arr} />
        <div className="big--container">
          <div className="big--sub-container"></div>
        </div>
      </div>
    </>
  );
}
