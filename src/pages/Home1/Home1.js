import React from "react";
import Dawry from "../../component/Dawry/Dawry";
import News from "../../component/News/News";
import Shows from "../../component/Shows/Shows";
import "./Home1.css";

const Home1 = () => {
  return (
    <>
      <Dawry />
      <Shows num={3} />
      <News />
    </>
  );
};

export default Home1;
