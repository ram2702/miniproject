import React from "react";
import "../css/signupStyle.css";
export default function Main() {
  return (
    <>
      <div className="content">
        <div className="caption">
          <p className="onse">EAT HEALTHY.</p>
          <p className="two">WORKOUT.</p>
          <p className="three">REPEAT.</p>
          <p className="four">Get Started on your Fitness Journey!</p>
          <p className="caplink five" onClick="location.href='/dashboard'">
            <a href="/miniproject/dashboard">Get Started.</a>
          </p>
        </div>
      </div>
    </>
  );
}
