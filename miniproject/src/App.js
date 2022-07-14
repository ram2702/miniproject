import React from "react";
import MainPage from "./Components/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/App.css";
import Dash from "./Components/dash";
import Bigthree from "./Components/bigthree";
import Signup from "./Components/signup";
console.log(document.all);
function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/DietMonitor" element={<Bigthree />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
