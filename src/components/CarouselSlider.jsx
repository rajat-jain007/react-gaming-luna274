import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import banner4 from "./images/banner4.jpg";
import banner5 from "./images/banner5.jpg";
import banner6 from "./images/banner6.jpg";
import banner7 from "./images/banner7.jpg";

function CarouselSlider() {
  return (
    <Carousel className="h-52 mt-[-5rem] md:mt-[-3.5rem] lg:mt-[-2rem] xl:mt-[-.1rem] ">
      <img src={banner1} alt="banner1" />

      <img src={banner2} alt="banner2" />

      <img src={banner3} alt="banner3" />

      <img src={banner4} alt="banner4" />

      <img src={banner5} alt="banner5" />

      <img src={banner6} alt="banner6" />
      <img src={banner7} alt="banner7" />
    </Carousel>
  );
}

export default CarouselSlider;
