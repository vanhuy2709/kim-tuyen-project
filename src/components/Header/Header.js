import logo from "../../assets/images/youtube-dark-icon.png";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo-header" className="header__logo--img" />
        <h4 className="header__logo--title">KimBling</h4>
      </div>

      <div className="header__route">
        <NavLink className="header__route--link" to="/">
          HOME
        </NavLink>
        <NavLink className="header__route--link" to="/about">
          ABOUT
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
