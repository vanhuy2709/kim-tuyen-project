import "./Footer.scss";
import { scroller } from "react-scroll";

const Footer = () => {
  const handleBtnToTop = () => {
    scroller.scrollTo("App", {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <>
      <div className="footer__left">
        <p className="get-in-touch">GET IN TOUCH</p>
        <ul className="social__list">
          <li className="social__item">
            <a
              className="social--link facebook"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/kimtuyenyooo"
            >
              FB<span className="blue">.</span>
            </a>
          </li>

          <li className="social__item">
            <a
              className="social--link instagram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/kim.blingg"
            >
              IG<span className="pink">.</span>
            </a>
          </li>

          <li className="social__item">
            <a
              className="social--link gmail"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:kimtuyennguyenthi.vn@gmail.com"
            >
              GM<span className="red">.</span>
            </a>
          </li>

          <li className="social__item">
            <a
              className="social--link tiktok"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@kimtuyenkimblingg"
            >
              TT<span className="purple">.</span>
            </a>
          </li>
        </ul>

        <p className="move-forward">WANT TO MOVE FORWARD?</p>
      </div>

      <div className="footer__right">
        <button onClick={handleBtnToTop} className="btn-top">
          BACK TO TOP
        </button>
      </div>
    </>
  );
};

export default Footer;
