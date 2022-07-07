import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProviderUsingClass.js.js";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressDiv(props) {
  return (
    <div className="solobg one">
      <p className="progress-title">{props.progData.name}</p>
      <span className="progressbar">
        <ProgressProvider valueStart={0} valueEnd={props.progData.progress}>
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
        <p className="progress-stats">{props.progData.att1[0]}</p>
        <p className="progress-stats-num">{props.progData.att1[1]}</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">{props.progData.att2[0]}</p>
        <p className="progress-stats-num">{props.progData.att2[1]}</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">{props.progData.att3[0]}</p>
        <p className="progress-stats-num">{props.progData.att3[1]}</p>
      </span>
      <span className="progress-area">
        <p className="progress-stats">{props.progData.att4[0]}</p>
        <p className="progress-stats-num">{props.progData.att4[1]}</p>
      </span>
    </div>
  );
}
