import "./Expertise.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Expertise = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="expertise">
      <div className="wrapper">
        <h2 className="expertise__title">EXPERTISE</h2>
        <div className="expertise__content">
          <div
            className="expertise__skill"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h4 className="skill--title">MASTER of CEREMONIES</h4>
            <p className="skill--desc">
              Master of Ceremonies is the host or hostess who is in charge of
              proceedings and keeping a ceremony, event or meeting flowing
              smoothly. The MC formally opens the event, introduces speakers and
              performers, and engages the audience throughout the program.
            </p>
            <h6 className="skill--detail">Introducing segments</h6>
            <h6 className="skill--detail">Engaging the audience</h6>
            <h6 className="skill--detail">Quick thinking</h6>
            <h6 className="skill--detail">Keeping to schedule</h6>
            <h6 className="skill--detail">Outgoing personality</h6>
            <h6 className="skill--detail">Building excitement</h6>
          </div>
          <div
            className="expertise__skill"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h4 className="skill--title">VOICE TALENT</h4>
            <p className="skill--desc">
              A Voice Talent is a person who uses their voice professionally to
              bring characters and content to life. A voice talent is a gifted
              professional who uses their unique voice and performance skills to
              bring heart and resonance to all kinds of media productions in a
              compelling way.
            </p>
            <h6 className="skill--detail">Voice acting</h6>
            <h6 className="skill--detail">Reading scripts</h6>
            <h6 className="skill--detail">Engaging vocal delivery</h6>
            <h6 className="skill--detail">Clear pronunciation</h6>
            <h6 className="skill--detail">Vocal versatility</h6>
            <h6 className="skill--detail">Evoke emotions</h6>
          </div>
          <div
            className="expertise__skill"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h4 className="skill--title">STYLING</h4>
            <p className="skill--desc">
              A Stylist is a creative professional who helps individuals and
              productions showcase their desired image and style. The role of a
              Stylist requires exceptional taste, vision, industry knowledge and
              interpersonal skills. Skilled stylists can amplify their client's
              inner confidence and outer glamour.
            </p>
            <h6 className="skill--detail">Curate outfits</h6>
            <h6 className="skill--detail">Fashion trends</h6>
            <h6 className="skill--detail">Collaborate with creatives</h6>
            <h6 className="skill--detail">Innovative styles</h6>
            <h6 className="skill--detail">Showcase body types</h6>
            <h6 className="skill--detail">Creative eye</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
