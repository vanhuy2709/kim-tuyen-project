import "./AboutHero.scss";
import imgPortfolio from "../../../assets/images/IMG_3966.JPG";

const AboutHero = () => {
  return (
    <div className="wrapper">
      <div className="about__hero">
        <h2 className="about__title">
          HELLO
          <br />
          I'M KIM BLING.
          <br />
          Master of Ceremony.
        </h2>
        <img src={imgPortfolio} alt="main-img" className="main-img" />
      </div>
    </div>
  );
};

export default AboutHero;
