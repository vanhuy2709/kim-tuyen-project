import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Project from "../components/Project/Project";
import Blog from "../components/Admin/BlogPage/Blog";
import MaybeShowNavbar from "../components/MaybeShowNavbar/MaybeShowNavbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const AppContainer = document.querySelector(".App");

      // Thay đổi màu nền dựa theo phần trăm scroll
      if (window.scrollY < 100) {
        document.body.style.background = "white";
        AppContainer.style.color = "black";
      } else {
        document.body.style.background = "black";
        AppContainer.style.color = "white";
      }
    });
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      <MaybeShowNavbar>
        <Header />
      </MaybeShowNavbar>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={800}>
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<Portfolio />} />
            <Route path="/about/heineken" element={<Blog />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
