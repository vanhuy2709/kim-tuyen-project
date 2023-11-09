import React from "react";
import AboutHero from "../../components/AboutHero/AboutHero";
import Resume from "../../components/Resume/Resume";
import Expertise from "../../components/Expertise/Expertise";
import Client from "../../components/About_Client/Client";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="about">
      <AboutHero />
      <Resume />
      <Expertise />
      <Client />
    </section>
  );
};

export default HomePage;
