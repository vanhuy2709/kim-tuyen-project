import "./App.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import Blog from "../components/Admin/BlogPage/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../components/Project/Project";

function App() {
  // Lấy chiều cao của document
  let docHeight = document.documentElement.scrollHeight;

  window.addEventListener("scroll", () => {
    // Tính phần trăm chiều cao đã scroll
    let scrollPercent = (window.pageYOffset / docHeight) * 100;
    const AppContainer = document.querySelector(".App");

    // Thay đổi màu nền dựa theo phần trăm scroll
    if (scrollPercent < 5) {
      document.body.style.background = "white";
      AppContainer.style.color = "black";
    } else {
      document.body.style.background = "black";
      AppContainer.style.color = "white";
    }
  });

  const location = useLocation();

  return (
    // <BrowserRouter>
    <div className="App">
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={800}>
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<Portfolio />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
