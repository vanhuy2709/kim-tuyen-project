import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Admin/BlogPage/Blog";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect } from "react";

import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ProjectPage from "./ProjectPage/ProjectPage";
// import Layout from "../components/Layout/Layout";

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
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={800}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/about/heineken" element={<Blog />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
