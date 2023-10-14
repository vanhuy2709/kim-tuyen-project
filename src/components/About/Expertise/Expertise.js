import "./Expertise.scss";

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="wrapper">
        <h2 className="expertise__title">EXPERTISE</h2>
        <div className="expertise__content">
          <div className="expertise__skill">
            <h4 className="skill--title">STRATEGY</h4>
            <p className="skill--desc">
              Strategy is the underlying foundation of every great brand
              experience. Strategy that is centered on clarifying a brand’s
              message to inform their decisions and shape their actions.
            </p>
            <h6 className="skill--detail">RESEARCH & ANALYSIS</h6>
            <h6 className="skill--detail">TREND & INSIGHT</h6>
            <h6 className="skill--detail">CUSTOMER EXPERIENCE</h6>
            <h6 className="skill--detail">BRAND PLATFORM & POSITIONING</h6>
            <h6 className="skill--detail">GO-TO-MARKET PLANNING</h6>
            <h6 className="skill--detail">CONTENT & MESSAGING</h6>
          </div>
          <div className="expertise__skill">
            <h4 className="skill--title">DESIGN</h4>
            <p className="skill--desc">
              From voice to tone to style, every expression matters. Brand
              design shapes a brand experience by creating identity touchpoints
              from design systems to key messages.
            </p>
            <h6 className="skill--detail">BRAND IDENTITY</h6>
            <h6 className="skill--detail">VISUAL LANGUAGE</h6>
            <h6 className="skill--detail">PACKAGING DESIGN</h6>
            <h6 className="skill--detail">BRAND CAMPAIGN</h6>
            <h6 className="skill--detail">SIGNATURE ASSETS</h6>
            <h6 className="skill--detail">BRAND GUIDELINES</h6>
          </div>
          <div className="expertise__skill">
            <h4 className="skill--title">DIGITAL</h4>
            <p className="skill--desc">
              Creative functionality with intuitive design makes every
              interaction more meaningful. Embracing digital as an extension of
              the physical brand has the power to elevate the experience.
            </p>
            <h6 className="skill--detail">FRONT END WEB DESIGN</h6>
            <h6 className="skill--detail">UI DESIGN</h6>
            <h6 className="skill--detail">UX STRATEGY</h6>
            <h6 className="skill--detail">APP DESIGN</h6>
            <h6 className="skill--detail">CMS INTEGRATIONS</h6>
            <h6 className="skill--detail">DIGITAL ADVERTISING</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
