import logo from "../../assets/images/youtube-dark-icon.png";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo-header" className="header__logo--img" />
        <h4 className="header__logo--title">KimBling</h4>
      </div>

      <div className="header__route">
        <Link className="header__route--link" to="/" exact>
          HOME
        </Link>
        <Link className="header__route--link" to="/about">
          ABOUT
        </Link>
      </div>
    </header>
  );
}

export default Header;
