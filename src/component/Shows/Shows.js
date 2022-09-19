import React from "react";
import "./Shows.css";

import imge2 from "../../images/Untitled-1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Shows = ({ num }) => {
  return (
    <section>
      <h2>الاعبين</h2>
      <div className="container">
        <Swiper
          slidesPerView={num}
          slidesPerGroup={1}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imge2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Shows;
