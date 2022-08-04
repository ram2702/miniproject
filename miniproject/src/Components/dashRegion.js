import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/dashstyle.css";

export default function DashRegion() {
  const [northDiet, setNorthDiet] = React.useState([]);
  const [menu, setMenu] = React.useState(false);
  const [southDiet, setSouthDiet] = React.useState([]);
  const [isActive, setIsActive] = React.useState([1, 1, 1]);
  const [foodName, setFoodName] = React.useState();
  const [form, setForm] = React.useState({
    bmi: "",
    email: "",
    foodpref: "",
    height: "",
    lifestyle: "",
    loggedIn: "",
    password: "",
    phone: "",
    username: "",
    weight: "",
    _id: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function getRecords() {
      const northresponse = await fetch(`http://localhost:5000/northIndian/`);
      const southresponse = await fetch(`http://localhost:5000/southIndian/`);
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

      if (!northresponse.ok) {
        const Nmessage = `An error occurred: ${northresponse.statusText}`;
        window.alert(Nmessage);
        return;
      }
      if (!southresponse.ok) {
        const message = `An error occurred: ${northresponse.statusText}`;
        window.alert(message);
        return;
      }
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        return;
      }

      setForm((prevform) => ({ ...prevform, ...record }));

      const northRecords = await northresponse.json();
      const southRecords = await southresponse.json();
      setNorthDiet(northRecords);
      setSouthDiet(southRecords);
    }

    getRecords();
    return;
  }, [params.id]);

  const handleClick = React.useCallback(
    (element) => {
      switch (element) {
        case 0:
          setMenu(1);
          setFoodName(
            southDiet.map((south) => (
              <p className="catalog" key={south._id}>
                {south.food}
              </p>
            ))
          );

          break;
        case 1:
          setMenu(2);
          setFoodName(
            northDiet.map((north) => (
              <p className="catalog" key={north._id}>
                {north.food}
              </p>
            ))
          );

          break;
        case 2:
          setMenu(3);
          break;
        default:
          break;
      }
      setIsActive((preVal) => {
        return {
          ...!preVal,
          [element]: 1,
        };
      });
    },
    [southDiet, northDiet]
  );

  async function onSubmit(event) {
    event.preventDefault();
    switch (menu) {
      case 1:
        form.foodpref = "southIndian";
        break;
      case 2:
        form.foodpref = "northIndian";
        break;
      case 3:
        form.foodpref = "generic";
        break;
      default:
        break;
    }
    const editedPerson = {
      foodpref: form.foodpref,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/updatefood/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate(
      `/dashboardselectregion/${localStorage
        .getItem("currentUserData")
        .toString()}`
    );
  }

  console.log(form.foodpref);

  return (
    <div className="dash">
      {<h1 className="heading pre">Choose your Diet Region</h1>}
      {isActive[0] && (
        <>
          <h2
            onClick={handleClick.bind(Event, 0)}
            className={
              form.foodpref === "southIndian"
                ? "dietitem south green"
                : "dietitem south"
            }
          >
            Southern Diet
          </h2>
        </>
      )}
      {isActive[1] && (
        <h2
          onClick={handleClick.bind(Event, 1)}
          className={
            form.foodpref === "northIndian"
              ? "dietitem north green"
              : "dietitem north"
          }
        >
          Northern Diet
        </h2>
      )}
      {isActive[2] && (
        <h2
          onClick={handleClick.bind(Event, 2)}
          className={
            form.foodpref === "Generic"
              ? "dietitem generic green"
              : "dietitem generic"
          }
        >
          Generic Diet
        </h2>
      )}
      <div className="dietlist" key={foodName}>
        {foodName}
      </div>
      {menu && (
        <button
          className="buttonsignup detail--button saveregion"
          type="submit"
          onClick={onSubmit}
        >
          CONFIRM
        </button>
      )}
    </div>
  );
}
