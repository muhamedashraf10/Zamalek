import "./Home2.css";
import Section1 from "../../component/Home2/Section1";
import Section2 from "../../component/Home2/Section2";
import Sponsors from "../../component/Sponsors/Sponsors";

const Home2 = () => {
  return (
    <>
      <Section1 />
      <Section1 />
      <Section2 title="فريق عمل نادي الزمالك" />
      <Section2 title="فريق عمل الانتاج الفني" />
      <Sponsors />
    </>
  );
};

export default Home2;
