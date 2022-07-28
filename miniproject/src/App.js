import React from "react";
import MainPage from "./Components/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/App.css";
import Dash from "./Components/dash";
import DashRegion from "./Components/dashRegion";
import Bigthree from "./Components/bigthree";
import Signup from "./Components/signup";
import Details from "./Components/details";
import DashHome from "./Components/dashHome";

console.log(document.all);
function App() {
  const dashHomeprops = [<DashHome />, 0];
  const dashRegionprops = [<DashRegion />, 1];
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route
            path="/dashboard/:id"
            element={<Dash propsforDash={dashHomeprops} />}
          />
          <Route
            path="/dashboardselectregion/:id"
            element={<Dash propsforDash={dashRegionprops} />}
          />
          <Route path="/home" element={<MainPage />} />
          <Route path="/DietMonitor" element={<Bigthree />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/details/:id/" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
