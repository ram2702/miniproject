import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/dashstyle.css";
export default function DashGoal() {
  const [form, setForm] = React.useState({
    weightToLose: "",
    dayLimit: "",
    activityLevel: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  // const [bmiStatus, setBmiStatus] = React.useState("");
  const [warningTag, setwarningTag] = React.useState();

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

  async function onSubmit(event) {
    event.preventDefault();

    console.log(form);

    const bmr =
      form.gender === "Male"
        ? Math.floor(
            66 + 6.2 * form.weight + 12.7 * form.height - 6.76 * form.age
          )
        : Math.floor(
            655.1 + 9.563 * form.weight + 1.85 * form.height - 4.676 * form.age
          );

    const curCalReq = Math.floor(bmr * form.activityLevel);

    const dailyBurn = Math.floor((form.weightToLose * 7700) / form.dayLimit);
    const goalFeasibilityFactor = curCalReq - bmr >= dailyBurn ? true : false;
    var workoutStatus;
    if (form.activityLevel === "1.2") workoutStatus = "No";
    else if (form.activityLevel === "1.5") workoutStatus = "Light";
    else if (form.activityLevel === "1.7") workoutStatus = "High";

    console.log(
      form.weight,
      form.height,
      bmr,
      curCalReq,
      workoutStatus,
      dailyBurn,
      goalFeasibilityFactor
    );

    const editedPerson = {
      activityLevel: form.activityLevel,
      dayLimit: form.dayLimit,
      weightToLose: form.weightToLose,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/updateGoal/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newBMI = Number(
      ((form.weight - form.weightToLose) / form.height / form.height) * 10000
    ).toFixed(1);
    console.log(newBMI);
    if (!goalFeasibilityFactor) {
      setwarningTag(
        <h2 className="warning red">
          WARNING! Please reconsider your Weight loss goal as this Goal
          Unrealistic, Please change your Activity Level to lose more weight
        </h2>
      );
      return;
    } else {
      setwarningTag(
        <h2 className="warning green">
          Daily Calorie Burn Goal: {dailyBurn} <br /> Current Goal demands{" "}
          {workoutStatus} Workout requirement
        </h2>
      );
      console.log("OK");
      // navigate("/dashboard");
    }
  }
  function handleChange(event) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
    if (event.target.name);
  }

  return (
    <div className="dash">
      <h1 className="heading pre">What's your Fitness Goal?</h1>

      <form id="signup" className="signform goalinput " action="submit">
        <input
          type="text"
          onChange={handleChange}
          name="weightToLose"
          value={form.weightToLose}
          className="weighttolose"
          placeholder="How much do you wanna lose? (Kg)"
        />

        <input
          onChange={handleChange}
          type="number"
          name="dayLimit"
          value={form.dayLimit}
          placeholder="In how many days?"
        />
        <select
          name="activityLevel"
          onChange={handleChange}
          className="detail--Lifestyle lifestyle--one"
        >
          <option value="" disabled selected hidden>
            Daily Activity Level
          </option>
          <hr />
          <option value={1.2}>No exercise</option>
          <hr />
          <option value={1.5}>Light Activity(Exercise sometimes)</option>
          <hr />
          <option value={1.7}>High Activity (Exercise Everyday)</option>
        </select>
      </form>
      <button
        className="buttonsignup detail--button saveregion end"
        type="submit"
        onClick={onSubmit}
      >
        CONFIRM
      </button>
      {warningTag}
    </div>
  );
}
