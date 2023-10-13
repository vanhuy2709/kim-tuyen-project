import logo from "../../assets/images/youtube-dark-icon.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo-header" className="header__logo--img" />
        <h4 className="header__logo--title">KimBling</h4>
      </div>

      <div className="header__route">
        <a href="https://facebook.com" className="header__route--link">
          ABOUT
        </a>
      </div>
    </header>
  );
}

export default Header;
