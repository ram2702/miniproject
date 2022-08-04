import React from "react";
import "../css/style.css";
import "../css/signupStyle.css";
import { Link } from "react-router-dom";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import sign_up from "../Images/sign-up.png";
import sign_in from "../Images/sign-in.png";
import Signin from "./signin";
// import { useNavigate } from "react-router";

export default function SignUp() {
  const [isActive, setActive] = React.useState("false");
  const togle = () => {
    setActive(!isActive);
  };

  const [form, setForm] = React.useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    retypePassword: "",
    loggedIn: false,
  });
  // const navigate = useNavigate();

  function handleChange(event) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
    if (form.username === "") {
      window.alert("Enter Username");
      return;
    }
    if (form.password === "" || form.password.length < 6) {
      window.alert(
        "Enter valid Password (Password should be atleast 6 characters long)"
      );
      return;
    }
    const check = form.password;
    if (form.retypePassword.localeCompare(check)) {
      window.alert("Passwords do not Match");
      return;
    }
    window.alert("User Created");
    const newPerson = { ...form };
    const calorieData = {
      username: form.username,
    };
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    await fetch("http://localhost:5000/calorieTrack/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calorieData),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      username: "",
      phone: "",
      email: "",
      password: "",
      retypePassword: "",
    });
  }

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

              <img src={google} height="40px" width="40px" alt="" />

              <img src={twitter} height="40px" width="40px" alt="" />
            </div>
            <form
              id="signup"
              className={isActive ? "signform " : "signform dp"}
              action="submit"
            >
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username*"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email-Id"
              />
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="Password*"
              />
              <input
                type="password"
                name="retypePassword"
                required
                value={form.retypePassword}
                onChange={handleChange}
                placeholder="Retype Password*"
              />
              <button className="buttonsignup" type="submit" onClick={onSubmit}>
                SIGN UP
              </button>
            </form>
            <Signin isActive={isActive} />
          </div>
          <div id="moov" className={isActive ? "aluser " : "aluser signinpg"}>
            <h2 id="signuph2" className={isActive ? "" : "dp"}>
              Already have an Account?
            </h2>
            <h2 id="signinh2" className={isActive ? "dp" : ""}>
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
