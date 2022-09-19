import React from "react";
import Dawry from "../../component/Dawry/Dawry";
import HomeSlider from "../../component/HomeSlider/HomeSlider";
import News from "../../component/News/News";
import Shows from "../../component/Shows/Shows";
import "./Home1.css";

const Home1 = () => {
  return (
    <>
      <HomeSlider />
      <Dawry />
      <Shows num={3} />
      <News />
    </>
  );
};

export default Home1;
