import img1 from "../../images/Slider/1.png";
import img2 from "../../images/Slider/2.png";
import img3 from "../../images/Slider/3.png";
import img4 from "../../images/Slider/4.png";
const HomeSlider = () => {
  return (
    <>
      <div className="home-slider">
        <div className="slider-1">
          <img src={img1} className="slider-dim " />
          <div className="slider-1-title">عنوان 1</div>
        </div>
        <div className="slider-1">
          <img src={img2} className="slider-dim " />
          <div className="slider-1-title">عنوان 1</div>
        </div>
        <div className="slider-1">
          <img src={img3} className="slider-dim " />
          <div className="slider-1-title">عنوان 1</div>
        </div>
        <div className="slider-1">
          <img src={img4} className="slider-dim " />
          <div className="slider-1-title">عنوان 1</div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
