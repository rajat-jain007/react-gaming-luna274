import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeText() {
  return (
    <Marquee className="md:mb-0">
      <h1 className=" animate-text bg-gradient-to-r from-teal-300 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg S font-black mt-0  lg:block md:mb-0 relative z-[-2]">
        Welcome to Luna's World
      </h1>
    </Marquee>
  );
}

export default MarqueeText;
