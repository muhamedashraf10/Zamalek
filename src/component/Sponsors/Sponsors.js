import sponsor1 from "../../images/sponsor/1.png";
import sponsor2 from "../../images/sponsor/2.png";
import sponsor3 from "../../images/sponsor/3.png";
import sponsor4 from "../../images/sponsor/4.png";
import sponsor5 from "../../images/sponsor/5.png";
import "./sponsor.css";

const Sponsors = () => {
  return (
    <div className="sponsor-section">
      <div className="sponsors">
        <ul>
          <li>
            <img src={sponsor1}></img>
          </li>
          <li>
            <img src={sponsor2}></img>
          </li>
          <li>
            <img src={sponsor3}></img>
          </li>
          <li>
            <img src={sponsor4}></img>
          </li>
          <li>
            <img src={sponsor5}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
