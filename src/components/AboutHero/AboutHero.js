import "./AboutHero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutHero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="wrapper">
      <div className="about__hero">
        <h2
          className="about__title"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
        >
          HELLO
          <br />
          I'M KIM BLING.
          <br />
          Master of Ceremony.
        </h2>
      </div>
    </div>
  );
};

export default AboutHero;
