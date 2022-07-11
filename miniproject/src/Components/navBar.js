import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrog } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
// import {arrow-right-to-bracket } from "@fortawesome/free-solid-svg-icons";

const elementLogo = <FontAwesomeIcon className="logo" icon={faFrog} />;
const elementHouse = <FontAwesomeIcon className="logo" icon={faHouse} />;
const elementCarrot = <FontAwesomeIcon className="logo" icon={faCarrot} />;
const elementSignup = <FontAwesomeIcon className="logo" icon={faUserPlus} />;
const elementWorkout = <FontAwesomeIcon className="logo" icon={faRunning} />;
const elementProfile = <FontAwesomeIcon className="logo" icon={faUser} />;
const elementDash = <FontAwesomeIcon className="logo" icon={faDashboard} />;

export default function navBar(props) {
  switch (props.arr) {
    case 1:
      return (
        <nav className="navbar">
          <ul className="logo ">
            <li>
              <span className="iconlogo">{elementLogo}</span>
              <span className="textlogo">
                <Link to="/home">fitfroggy.</Link>
              </span>
            </li>
          </ul>
          <ul className="navlinks dashnav--prof">
            <li>
              <span>
                <h4>User</h4>
                {elementProfile}
              </span>
            </li>
          </ul>
        </nav>
      );
    case 2:
      return (
        <>
          <nav className="navbar">
            <ul className="logo">
              <li>
                <span className="iconlogo">{elementLogo}</span>
                <span className="textlogo">
                  <Link to="/home">fitfroggy.</Link>
                </span>
              </li>
            </ul>
            <ul className="navlinks indtwo">
              <li>
                <span className="navlogo">
                  <span className="iconlogo">{elementDash}</span>
                </span>
                <span className="navtext home">
                  {" "}
                  <Link to="/dashboard">Dashboard</Link>{" "}
                </span>
              </li>
              <li>
                <a href="#pg-two">
                  <span className="navlogo">
                    <span className="navlogo">{elementProfile}</span>
                  </span>
                  <span className="navtext login">User</span>
                </a>
              </li>
            </ul>
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </>
      );
    default:
      return (
        <>
          <nav className="navbar">
            <ul className="logo">
              <li>
                <span className="iconlogo">{elementLogo}</span>
                <span className="textlogo">
                  <Link to="/home">fitfroggy.</Link>
                </span>
              </li>
            </ul>
            <ul className="navlinks">
              <li>
                <span className="navlogo">
                  <span className="iconlogo">{elementHouse}</span>
                </span>
                <span className="navtext home"> Home </span>
              </li>
              <li>
                <span className="navlogo">{elementCarrot}</span>
                <span className="navtext calTracker"> CalTracker </span>
              </li>
              <li>
                <span className="navlogo">{elementWorkout}</span>
                <span className="navtext login">Workout</span>
              </li>
              <li>
                <a href="#pg-two">
                  <span className="navlogo">
                    <span className="navlogo">{elementSignup}</span>
                  </span>
                  <span className="navtext login">Sign Up</span>
                </a>
              </li>
            </ul>
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </>
      );
  }
}
