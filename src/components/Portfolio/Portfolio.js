import "./Portfolio.scss";
import Hero from "./Hero/Hero";
import Brand from "./Brand/Brand";
import Current from "./Current/Current";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Hero />
      <Brand />
      <Current />
    </section>
  );
};

export default Portfolio;
