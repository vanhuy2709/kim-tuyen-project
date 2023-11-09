import React from "react";
import Hero from "../../components/Hero/Hero";
import Brand from "../../components/Brand/Brand";
import Current from "../../components/Current/Current";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <section className="portfolio">
      <Hero />
      <Brand />
      <Current />
    </section>
  );
};

export default AboutPage;
