import React from "react";
import "../css/dashstyle.css";
import ProgressDiv from "./progressdiv.js";
import { workOutData, dietData } from "../Data/workoutDashData";
import { Link, useNavigate, useParams } from "react-router-dom";
const userName = "User";
export default function DashHome() {
  const params = useParams();
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    gender: "",
    height: "",
    weight: "",
    foodpref: "",
    lifestyle: "",
    bmi: "",
    age: "",
  });
  React.useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm((prevform) => ({
        ...prevform,
        ...record,
      }));
    }

    fetchData();

    return;
  }, [params.id, navigate]);
  localStorage.setItem("Food Preference", form.foodpref);
  return (
    <div className="dash">
      <h1 className="heading">Welcome Back {userName}!</h1>
      <div className="main--sec">
        <div className="sec--one">
          <ProgressDiv progData={dietData} />
          <ProgressDiv progData={workOutData} />
        </div>
        <div className="sub--sec">
          <div className="solobg sub--one">
            <h3 className="progresstext">
              <Link
                to={
                  "/dietMonitor/" +
                  localStorage.getItem("currentUserData").toString()
                }
              >
                DietMonitor
              </Link>
            </h3>
          </div>
          <div className="solobg sub--two">
            <h3 className="progresstext"> WorkoutTab </h3>
          </div>
          <div className="solobg sub--three">
            <h3 className="progresstext"> DietTracker</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
