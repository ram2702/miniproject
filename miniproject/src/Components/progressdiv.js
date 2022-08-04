import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProviderUsingClass.js.js";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressDiv({ props }) {
  const date = new Date();
  let dateData = date.getDate();
  let count = 0;
  console.log(props);
  if (!(props.breakFastCal === 0)) count++;
  if (!(props.lunchCal === 0)) count++;
  if (!(props.snackCal === 0)) count++;
  if (!(props.dinnerCal === 0)) count++;
  let heavy = props.breakFastCal;
  heavy = Math.max(
    props.breakFastCal,
    props.lunchCal,
    props.snackCal,
    props.dinnerCal
  );
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  switch (getKeyByValue(props, heavy)) {
    case "breakFastCal":
      heavy = "Breakfast";
      break;
    case "lunchCal":
      heavy = "Lunch";
      break;
    case "snackCal":
      heavy = "Snack";
      break;
    case "dinnerCal":
      heavy = "Dinner";
      break;
  }

  return (
    <div className="solobg one">
      <p className="progress-title">Diet</p>
      <span className="progressbar">
        <ProgressProvider valueStart={0} valueEnd={(count / 100) * 25}>
          {(value) => (
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
          )}
        </ProgressProvider>
      </span>

      <span className="progress-area">
        <p className="progress-stats">Diet Entered</p>
        <p className="progress-stats-num">{count}/4</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">Today's Calories</p>
        <p className="progress-stats-num">{props[dateData]}</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">Daily Goal</p>
        <p className="progress-stats-num">
          {localStorage.getItem("dailyCalreq")}
        </p>
      </span>
      <span className="progress-area">
        <p className="progress-stats heavyt">Heaviest </p>
        <p className="progress-stats-num heavy">{heavy}</p>
      </span>
    </div>
  );
}
