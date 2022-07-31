import React from "react";
import Navbar from "./navBar";

import "../css/bigthree.css";
import { useNavigate, useParams } from "react-router";
const preference = localStorage.getItem("Food Preference");
const arr = 2;
let totCal = 0;
const dailyCalreq = localStorage.getItem("dailyCalreq");
export default function Bigthree() {
  const params = useParams();

  const navigate = useNavigate();
  const [form, setForm] = React.useState({});

  function handleChange(event) {
    if (event.target.name === "currentMeal") {
      setTempVar(event.target.value);
    }
    console.log(tempVar);
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }

  function clearFoodItem() {
    setConfirm(false);
    let temp = [];
    setFoodItems(temp);
    console.log(foodItems);
    totCal = 0;
  }

  function confirmFoodItem() {
    totCal = 0;
    if (confirm === false) {
      foodItems.map((x) => (totCal += x.calories * x.count));
      console.log(totCal);
      setForm((pre) => ({ ...pre, currentmealCal: totCal }));
    }
    let calRemaind = dailyCalreq - totCal;
    console.log(calRemaind);
    setForm((pre) => ({ ...pre, calRemain: calRemaind }));
    setConfirm(true);
  }

  function handleDiet(event) {
    setConfirm(false);
    let calCount = apiDiet.find((x) => x.food === event.target.value);

    let currentItem = {
      name: event.target.value,
      count: 1,
      calories: calCount.calories,
    };
    if (!foodItems) setFoodItems([currentItem]);
    else setFoodItems((pre) => [...pre, currentItem]);
  }
  React.useEffect(() => {
    function plus(event) {
      setConfirm(false);

      let temp = foodItems;
      temp.map((x) => {
        if (x.name === event.target.id) {
          x.count++;
        }
      });
      setFoodItems(temp);
      console.log(foodItems);
      setList(
        foodItems.map((x) => (
          <p className="big--elements big--list" key={x.name}>
            <span id={x.name} onClick={minus} className="big--minus">
              -
            </span>
            {x.name}
            {` (${x.count})`}
            <span onClick={plus} id={x.name} className="big--plus">
              +
            </span>
          </p>
        ))
      );
    }
    function minus(event) {
      let temp = foodItems;
      temp.map((x) => {
        if (x.name === event.target.id && x.count > 1) {
          x.count--;
          setConfirm(false);
        }
      });

      setFoodItems(temp);
      console.log(foodItems);

      setList(
        foodItems.map((x) => (
          <p className="big--elements big--list" key={x.name}>
            <span id={x.name} onClick={minus} className="big--minus">
              -
            </span>
            {x.name}
            {` (${x.count})`}
            <span onClick={plus} id={x.name} className="big--plus">
              +
            </span>
          </p>
        ))
      );
    }

    if (foodItems)
      setList(
        foodItems.map((x) => (
          <p className="big--elements big--list" key={x.name}>
            <span id={x.name} onClick={minus} className="big--minus">
              -
            </span>
            {x.name}
            {` (${x.count})`}
            <span onClick={plus} id={x.name} className="big--plus">
              +
            </span>
          </p>
        ))
      );

    console.log(foodItems);
  }, [foodItems]);

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
    console.log("Hi");
    return;
  }, [params.id, navigate]);

  React.useEffect(() => {
    if (form.currentMeal !== form.previousMeal) {
      let temp = { ...form };
      temp.previousMeal = temp.currentMeal;

      setForm(temp);
    }
  }, [form.previousMeal]);

  React.useEffect(() => {
    async function getRecords() {
      const apiresponse = await fetch(`http://localhost:5000/${preference}/`);
      if (!apiresponse.ok) {
        const Nmessage = `An error occurred: ${apiresponse.statusText}`;
        window.alert(Nmessage);
        return;
      }
      const apiRecords = await apiresponse.json();
      setapiDiet(apiRecords);
    }

    getRecords();
    return;
  }, [params.id]);

  async function onSubmit(event) {
    if (!confirm) {
      return;
    }
    let temp = tempVar;
    setForm((pre) => ({ ...pre, currentMeal: temp }));
    console.log(form.currentMeal);
    event.preventDefault();
    console.log(form);
    const editedPerson = {
      previousMeal: form.previousMeal,
      currentMealCal: form.currentmealCal,
      calRemain: form.calRemain,
      currentMeal: form.currentMeal,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/updateDiet/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  console.log(form);

  return (
    <>
      <div className="mainpagebg">
        <Navbar arr={arr} />
        <div className="big--container">
          <div className="big--sub-container">
            <h1 className="big--heading">Diet Monitor</h1>
            <h2 className="big--first big--elements">
              Last Entered Meal : {"  "}
              {form.previousMeal}
            </h2>
            <h2 className="big--elements">
              Enter Meal:
              <select
                name="currentMeal"
                className=" big--select"
                value={tempVar}
                onChange={handleChange}
              >
                <option value="" disabled selected hidden>
                  Choose your Meal
                </option>
                <hr />
                <option value="Breakfast">Breakfast</option>
                <hr />
                <option value="Lunch">Lunch</option>
                <hr />
                <option value="Snack">Snack</option>
                <hr />
                <option value="Dinner">Dinner</option>
              </select>
            </h2>
            <h2 className="big--elements">
              Enter Food:
              <select
                name="currentFood"
                onChange={handleDiet}
                className=" big--select"
              >
                <option value="" disabled selected hidden>
                  Choose Food items
                </option>
                {apiDiet.map((items) => (
                  <option key={items._id} value={items.food}>
                    {items.food}
                    {` (1 ${items.unit}: ${items.calories} kcals)`}
                  </option>
                ))}
              </select>
              <span className="tikc-close">
                <img
                  src={close}
                  className="big--close"
                  alt="close"
                  height={40}
                  onClick={clearFoodItem}
                />{" "}
                <img
                  src={check}
                  className="big--tick"
                  alt="close"
                  height={40}
                  onClick={confirmFoodItem}
                />
              </span>
            </h2>
            {list}
            <br />
            <br />
            {confirm && (
              <h2 className="big--elements">
                Total Calories : {form.currentmealCal} <br />
                Daily Calorie Goal : {form.dailyCalreq} <br />
                Left to Consume : {form.calRemain} kcals
              </h2>
            )}

            <button
              className=" big--fal detail--button"
              type="submit"
              onClick={onSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
