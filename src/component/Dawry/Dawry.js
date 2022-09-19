import React from "react";
import "./Dawry.css";
import img1 from "../../images/image13.png";
import Matches from "../Matches/Matches";

const Dawry = () => {
  return (
    <section>
      <h2>دوري العاب شهر يوليو</h2>
      <h5>الدوري المصري الثالث</h5>
      <div className="dawry-content">
        <div className="image">
          <img src={img1} alt="dawry image" />
        </div>
        <div>
          <Matches />
          <Matches />
        </div>
      </div>
    </section>
  );
};

export default Dawry;
