import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Soal from "./pages/Soal";
import Soallanjutan from "./pages/Soallanjutan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soalutama" element={<Soal />} />
        <Route path="/soallanjutan" element={<Soallanjutan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
