import React from "react";
import Navbar from "./navBar.js";
import Main from "./main";
import SignUp from "./signup";
import "../css/style.css";
const arr = 4;

export default function MainPage() {
  return (
    <>
      <div className="mainpagebg">
        <Navbar arr={arr} />
        <Main />
      </div>
      <SignUp />
    </>
  );
}
