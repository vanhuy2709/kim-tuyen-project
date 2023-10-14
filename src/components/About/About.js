import "./About.scss";
import AboutHero from "./AboutHero/AboutHero";
import Resume from "./Resume/Resume";
import Expertise from "./Expertise/Expertise";
import ClientBrand from "./ClientBrand/ClientBrand";

const About = () => {
  return (
    <section className="about">
      <AboutHero />
      <Resume />
      <Expertise />
      <ClientBrand />
    </section>
  );
};

export default About;
