import React from "react";
import "./News.css";
import img4 from "../../images/Untitled3.png";
import img5 from "../../images/b7hh2vk6.png";

const News = () => {
  return (
    <section>
      <h2>أخبار نادي الزمالك</h2>
      <h5>تغطيه خاصه من داخل النادي</h5>
      <div className="news container">
        <div className="news-imge1">
          <img src={img4} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="news-imge2">
          <img className="imgss" src={img5} alt="" />
          <div className="imagess">
            <img src={img4} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
