import React from "react";
import "../css/dashstyle.css";
export default function DashGoal() {
  const [formisActive, setformIsActive] = React.useState(0);
  const [tagisActive, settagIsActive] = React.useState(4);
  const handleClick1 = (event) => {
    setformIsActive(1);
    settagIsActive(1);
  };
  const handleClick2 = (event) => {
    setformIsActive(2);
    settagIsActive(2);
  };
  const handleClick3 = (event) => {
    setformIsActive(3);
    settagIsActive(3);
  };
  return (
    <div className="dash">
      <h1 className="heading pre">What's your Fitness Goal?</h1>
      <div className="selectGoal">
        <h2
          className={tagisActive === 1 ? "pcolor " : ""}
          onClick={handleClick1}
        >
          Lose Weight
        </h2>
        <h2
          className={tagisActive === 2 ? "pcolor " : ""}
          onClick={handleClick2}
        >
          Stay Fit
        </h2>
        <h2
          className={tagisActive === 3 ? "pcolor " : ""}
          onClick={handleClick3}
        >
          Gain Weight
        </h2>
      </div>
      <form
        id="signup"
        className={formisActive === 1 ? "signform goalinput " : "dp"}
        action="submit"
      >
        <input
          type="text"
          name="Name"
          placeholder="How much do you wanna lose?"
        />
        <input type="tel" name="Name" placeholder="In how many days?" />
        <input
          type="email"
          name="Name"
          placeholder="Tell me your about your Lifestyle"
        />
      </form>
      <form
        id="signup"
        className={formisActive === 2 ? "signform goalinput mid" : "dp"}
        action="submit"
      >
        <input type="text" name="Name" placeholder="Diet or Excercise ?" />
        <input
          type="text"
          name="Name"
          placeholder="Tell me your about your Lifestyle"
        />
      </form>
      <form
        id="signup"
        className={formisActive === 3 ? "signform goalinput end" : "dp"}
        action="submit"
      >
        <input
          type="text"
          name="Name"
          placeholder="How much do you wanna gain?"
        />
        <input type="tel" name="Name" placeholder="In how many days?" />
        <input
          type="email"
          name="Name"
          placeholder="Tell me your about your Lifestyle"
        />
      </form>
    </div>
  );
}
