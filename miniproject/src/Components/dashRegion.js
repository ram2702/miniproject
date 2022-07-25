import React from "react";
import "../css/dashstyle.css";

export default function DashRegion() {
  const [northDiet, setNorthDiet] = React.useState([]);
  const [southDiet, setSouthDiet] = React.useState([]);
  const [isActive, setIsActive] = React.useState([1, 1, 1]);
  const [foodName, setFoodName] = React.useState([]);
  const [menu, setMenu] = React.useState(3);
  React.useEffect(() => {
    async function getRecords() {
      const northresponse = await fetch(`http://localhost:5000/northdiet/`);
      const southresponse = await fetch(`http://localhost:5000/southdiet/`);

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

      const northRecords = await northresponse.json();
      const southRecords = await southresponse.json();
      setNorthDiet(northRecords);
      setSouthDiet(southRecords);
    }

    getRecords();

    return;
  }, []);
  console.log(northDiet);
  function handleClick(element) {
    setMenu(element);
    console.log(menu);
    switch (menu) {
      case 0:
        setFoodName(southDiet.map((south) => <h2>{south.food}</h2>));
        break;
      case 1:
        setFoodName(northDiet.map((north) => <h2>{north.food}</h2>));
        break;
    }
    setIsActive((preVal) => {
      return {
        ...!preVal,
        [element]: 1,
      };
    });
    console.log(northDiet);
  }

  return (
    <div className="dash">
      {<h1 className="heading pre">Choose your Diet Region</h1>}
      {isActive[0] && (
        <h2 onClick={handleClick.bind(Event, 0)} onM className="dietitem south">
          Southern Diet
        </h2>
      )}
      {isActive[1] && (
        <h2 onClick={handleClick.bind(Event, 1)} className="dietitem north">
          Northern Diet
        </h2>
      )}
      {isActive[2] && (
        <h2 onClick={handleClick.bind(Event, 2)} className="dietitem generic">
          Generic Diet
        </h2>
      )}
      <h3 className="dietlist" key={foodName}>
        {foodName}
      </h3>
    </div>
  );
}
