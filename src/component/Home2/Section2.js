import person from "../../images/person.png";
const Section2 = ({ title }) => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="crew-title">أبطال خلف الكواليس</div>
      <div className="crew-sub"> {title} </div>
      <div className="crew-slider d-flex gap-5">
        <div className="crew-person">
          <img src={person}></img>
          <div className="crew-card">
            <div>Name here</div>
            <div>lasdfasdfsdfsdfsdfsdfsdfasd</div>
            <div>social icons</div>
          </div>
        </div>
        <div className="crew-person">
          <img src={person}></img>
          <div className="crew-card">
            <div>Name here</div>
            <div>lasdfasdfsdfsdfsdfsdfsdfasd</div>
            <div>social icons</div>
          </div>
        </div>
        <div className="crew-person">
          <img src={person}></img>
          <div className="crew-card">
            <div>Name here</div>
            <div>lasdfasdfsdfsdfsdfsdfsdfasd</div>
            <div>social icons</div>
          </div>
        </div>
        <div className="crew-person">
          <img src={person}></img>
          <div className="crew-card">
            <div>Name here</div>
            <div>lasdfasdfsdfsdfsdfsdfsdfasd</div>
            <div>social icons</div>
          </div>
        </div>
        <div className="crew-person">
          <img src={person}></img>
          <div className="crew-card">
            <div>Name here</div>
            <div>lasdfasdfsdfsdfsdfsdfsdfasd</div>
            <div>social icons</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
