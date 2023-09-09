import { useState } from "react";

import "./App.css";

import MarqueeText from "./components/MarqueeText";

import Navlinks from "./components/Navlinks";
import Navbar from "./components/Navbar/Navbar.jsx";
import CarouselSlider from "./components/CarouselSlider";
import ScoreBoard from "./components/ScoreBoard";
import StripedRows from "./components/TableExample";
import TableExample from "./components/TableExample";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <MarqueeText />
        <CarouselSlider />
        {/* <ScoreBoard /> */}
        <TableExample />
        {/* <StripedRows /> */}

        {/* <Navlinks/> */}
      </div>
    </>
  );
}

export default App;
