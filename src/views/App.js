import "./App.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  // Lấy chiều cao của document
  let docHeight = document.documentElement.scrollHeight;

  window.addEventListener("scroll", () => {
    // Tính phần trăm chiều cao đã scroll
    let scrollPercent = (window.pageYOffset / docHeight) * 100;
    const AppContainer = document.querySelector(".App");

    // Thay đổi màu nền dựa theo phần trăm scroll
    if (scrollPercent < 10) {
      document.body.style.background = "white";
      AppContainer.style.color = "black";
    } else {
      document.body.style.background = "black";
      AppContainer.style.color = "white";
    }
  });

  const location = useLocation();

  return (
    // <Router>
    <div className="App">
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={800}>
          <Routes location={location}>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
    // {/* </Router> */}
  );
}

export default App;
