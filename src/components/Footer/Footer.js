import "./Footer.scss";
import { scroller } from "react-scroll";

const Footer = () => {
  const handleBtnToTop = () => {
    scroller.scrollTo("App", {
      duration: 1000,
      delay: 100,
      // smooth: true,
    });
  };

  return (
    <div className="wrapper">
      <div className="footer">
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
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li className="social__item">
              <a
                className="social--link instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kim.blingg"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li className="social__item">
              <a
                className="social--link gmail"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:kimtuyennguyenthi.vn@gmail.com"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>

            <li className="social__item">
              <a
                className="social--link tiktok"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@kimtuyenkimblingg"
              >
                <i className="fa-brands fa-tiktok"></i>
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
      </div>
    </div>
  );
};

export default Footer;
