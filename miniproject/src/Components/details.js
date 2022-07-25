import React from "react";
import Navbar from "./navBar";
import { useNavigate, useParams } from "react-router";
import "../css/bigthree.css";
import "../css/details.css";

const arr = 1;
export default function Details() {
  // const [bmi, setBmi] = React.useState(0);
  const [bmiStatus, setBmiStatus] = React.useState("");
  const [records, setRecords] = React.useState([]);
  const [form, setForm] = React.useState({
    gender: "",
    height: "",
    weight: "",
    foodpref: "",
    lifestyle: "",
    bmi: "",
    age: "",
  });
  const params = useParams();
  const navigate = useNavigate();
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
  // This method fetches the records from the database.
  React.useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();

      setRecords(records);
      records.forEach((x) => {
        if (x.loggedIn) localStorage.setItem("currentUserData", x._id);
      });
    }

    getRecords();

    return;
  }, [records.length]);

  function handleChange(event) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleBMI(event) {
    event.preventDefault();
    const newBMI = Number(
      (form.weight / form.height / form.height) * 10000
    ).toFixed(1);
    setForm((prevForm) => ({
      ...prevForm,
      bmi: newBMI,
    }));
    if (newBMI < 18.5) setBmiStatus("You are UnderWeight");
    else if (newBMI >= 18.5 && newBMI < 24.9) setBmiStatus("You are Healthy");
    else if (newBMI >= 25) setBmiStatus("You are OverWeight");
    else setBmiStatus("");
    console.log(newBMI >= 18.5 && newBMI > 24.9);
  }
  async function onSubmit(event) {
    event.preventDefault();
    console.log(form);
    const editedPerson = {
      weight: form.weight,
      height: form.height,
      foodpref: form.foodpref,
      lifestyle: form.lifestyle,
      bmi: form.bmi,
      gender: form.gender,
      age: form.age,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate(
      `/dashboard/${localStorage.getItem("currentUserData").toString()}`
    );
  }
  const user = localStorage.getItem("currentUserName");

  return (
    <>
      <div className="mainpagebg  ">
        <Navbar arr={arr} />
        <div className="big--container detail--background">
          <div className="big--sub-container detail--board">
            <h2 className="detail--mainhead">
              Hey {user}, Tell us More About Yourself!
            </h2>
            <form id="signin" className="signform detail--form" action="submit">
              <select
                value={form.gender}
                onChange={handleChange}
                className="detail--Lifestyle form--one"
                name="gender"
              >
                <option value="" disabled selected hidden>
                  Choose your Gender
                </option>
                <hr />
                <option value="Male">Male</option>
                <hr />
                <option value="Female">Female</option>
              </select>
              <input
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
                placeholder="Height in cm"
              />
              <input
                type="number"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                placeholder="Weight in Kg"
              />
              <div className="detail--BMI">
                <input
                  type="number"
                  name="bmi"
                  placeholder="BMI"
                  value={form.bmi}
                  onChange={handleChange}
                  readOnly
                />

                <button
                  className="buttonsignup detail--button"
                  onClick={handleBMI}
                >
                  Calculate BMI
                </button>
              </div>
              <input
                type="number"
                name="age"
                className="detail--age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
              />

              <p className="detail--bmistat">{bmiStatus}</p>
              <select
                value={form.lifestyle}
                onChange={handleChange}
                name="lifestyle"
                className="detail--Lifestyle lifestyle--one"
              >
                <option value="" disabled selected hidden>
                  Choose your Lifestyle
                </option>
                <hr />
                <option value="Sedentary">Sedentary</option>
                <hr />
                <option value="Active">Active</option>
                <hr />
                <option value="Athletic">Athletic</option>
              </select>
              <select
                value={form.foodpref}
                onChange={handleChange}
                className="detail--Lifestyle"
                name="foodpref"
              >
                <option value="" disabled selected hidden>
                  Choose your Food Preference
                </option>
                <hr />
                <option value="North Indian">North Indian</option>
                <hr />
                <option value="South Indian">South Indian</option>
                <hr />
                <option value={"Generic"}>Generic</option>
              </select>
              <button
                className="buttonsignup detail--button"
                type="submit"
                onClick={onSubmit}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
