import "./LeftSide.scss";
import logo from "../../../../assets/images/GFI-logo.png";
import { useNavigate } from "react-router-dom";

function LeftSide(props) {
  const navigate = useNavigate();
  const handleNavigateHomePage = () => {
    navigate('/')
  }

  return (
    <nav className="left-sidebar">
      <img src={logo} alt="logo" className="left-sidebar--image" onClick={handleNavigateHomePage} />
    </nav>
  );
}

export default LeftSide;
