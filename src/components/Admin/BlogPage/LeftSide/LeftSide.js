import "./LeftSide.scss";
import logo from "../../../../assets/images/logo-user/user-logo.jpg";
import { useNavigate } from "react-router-dom";

function LeftSide() {
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
