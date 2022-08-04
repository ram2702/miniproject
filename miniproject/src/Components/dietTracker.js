import React from "react";
import Navbar from "./navBar";
import PieChart from "./pieChart";
import Barchart from "./barChart";
import "../css/bigthree.css";
import { useNavigate, useParams } from "react-router";
const arr = 2;
let totCal = 0;
const dailyCalreq = localStorage.getItem("dailyCalreq");
export default function DietTracker() {
  const [calDetails, setCalDetails] = React.useState({});
  const [showDaily, setShowDaily] = React.useState(false);
  const [showMonthly, setShowMonthly] = React.useState(false);

  function handleChange(event) {
    if (event.target.value === "Daily Analysis") {
      setShowDaily(true);
      setShowMonthly(false);
    }
    if (event.target.value === "Monthly Analysis") {
      setShowDaily(false);
      setShowMonthly(true);
    }
  }

  React.useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `http://localhost:5000/calorieTrack/${localStorage
          .getItem("Username")
          .toString()}`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setCalDetails(records);
    }

    getRecords();

    return;
  }, []);
  console.log(calDetails);

  return (
    <>
      <div className="mainpagebg">
        <Navbar arr={arr} />
        <div className="big--container">
          <div className="big--sub-container">
            <h1 className="big--heading purple">Diet Tracker</h1>
            <h2 className="big--elements  big--first">
              Track your <span>Calorie</span> consumption here and see if you're
              meeting your Target.
            </h2>
            <select
              onChange={handleChange}
              name="activityLevel"
              className="trackoption"
            >
              <option value="" disabled selected hidden>
                View Analysis
              </option>
              <hr />
              <option value={"Daily Analysis"}>Daily Analysis</option>
              <hr />
              <option value={"Monthly Analysis"}>Monthly Analysis</option>
            </select>
            {showDaily && <PieChart props={calDetails} />}
            {showMonthly && <Barchart props={calDetails} />}
          </div>
        </div>
      </div>
    </>
  );
}
