import React from "react";
import "../css/style.css";
import "../css/signupStyle.css";
import { Link } from "react-router-dom";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import sign_up from "../Images/sign-up.png";
import sign_in from "../Images/sign-in.png";
export default function SignUp() {
  const [isActive, setActive] = React.useState("false");
  const togle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div id="pg-two" className="signpage">
        <div className="signupbg">
          <div id="myDIV" className={isActive ? "capsec " : "capsec capsign"}>
            <h2 className="signTitle">Lets Get Started!</h2>
            <div className="icons">
              <Link to="/dashboard">
                <img src={facebook} height="40px" width="40px" alt="" />
              </Link>
              <a href="#">
                <img src={google} height="40px" width="40px" alt="" />
              </a>
              <a href="#">
                <img src={twitter} height="40px" width="40px" alt="" />
              </a>
            </div>
            <form
              id="signup"
              className={isActive ? "signform " : "signform dp"}
              action="submit"
            >
              <input type="text" name="Name" placeholder="Name" />
              <input type="tel" name="Name" placeholder="Phone Number" />
              <input type="email" name="Name" placeholder="Email-Id" />
              <input type="password" name="Name" placeholder="Password" />
              <input
                type="password"
                name="Name"
                placeholder="Retype Password"
              />
              <button className="buttonsignup" type="submit">
                SIGN UP
              </button>
            </form>
            <form
              id="signin"
              className={
                isActive ? "signinform signform dp" : "signform signinform"
              }
              action="submit"
            >
              {/* <br /> */}
              <input type="email" name="Email" placeholder="Email-Id" />
              <input type="password" name="Password" placeholder="Password" />
              <button
                className="buttonsignup"
                type="/dashboard"
                href="/dashboard"
              >
                SIGN IN
              </button>
            </form>
          </div>
          <div id="moov" className={isActive ? "aluser " : "aluser signinpg"}>
            <h2 id="signuph2">Already have an Account?</h2>
            <h2 id="signinh2" className="dp">
              Don't have an Account?
            </h2>

            <p
              id="signintag"
              onClick={togle}
              className={isActive ? "pee " : "pee dp"}
            >
              <img src={sign_in} height="40px" width="40px" alt="hjg" />
              SIGN IN
            </p>
            <p
              id="signuptag"
              onClick={togle}
              className={isActive ? "pee dp" : "pee"}
            >
              <img src={sign_up} height="40px" width="40px" alt="jh" />
              SIGN UP
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
