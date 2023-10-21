import "./LeftSide.scss";
import logo from "../../../../assets/images/GFI-logo.png";

function LeftSide(props) {
  return (
    <nav className="left-sidebar">
      <img src={logo} alt="logo" className="left-sidebar--image" />
    </nav>
  );
}

export default LeftSide;
