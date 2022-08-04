import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProviderUsingClass.js.js";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressDiv(props) {
  console.log(props);
  return (
    <div className="solobg one">
      <p className="progress-title">{props.progData.name}</p>
      <span className="progressbar">
        <ProgressProvider valueStart={0} valueEnd={3}>
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
        <p className="progress-stats">ji</p>
        <p className="progress-stats-num">ff</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">ff</p>
        <p className="progress-stats-num">f</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">ff</p>
        <p className="progress-stats-num">f</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">f</p>
        <p className="progress-stats-num">f</p>
      </span>
    </div>
  );
}
