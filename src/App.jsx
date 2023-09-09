import { useState } from "react";

import "./App.css";

import MarqueeText from "./components/MarqueeText";

import Navbar from "./components/Navbar/Navbar.jsx";
import CarouselSlider from "./components/CarouselSlider";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <MarqueeText />
        <CarouselSlider />
        <ScoreBoard />
      </div>
    </>
  );
}

export default App;
