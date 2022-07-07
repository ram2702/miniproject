import React from "react";
import MainPage from "./Components/mainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Dash from "./Components/dash";
import Bigthree from "./Components/bigthree";
console.log(document.all);
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dash />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
