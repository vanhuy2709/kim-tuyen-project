import "./About.scss";
import AboutHero from "./AboutHero/AboutHero";
import Resume from "./Resume/Resume";
import Expertise from "./Expertise/Expertise";
import Client from "./About_Client/Client";

const About = () => {
  return (
    <section className="about">
      <AboutHero />
      <Resume />
      <Expertise />
      <Client />
    </section>
  );
};

export default About;
