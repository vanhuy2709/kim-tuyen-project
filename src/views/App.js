import "./App.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Brand from "../components/Brand/Brand";
import brandLogo from "../assets/images/dataImg";
import Current from "../components/Current/Current";
import Footer from "../components/Footer/Footer";

function App() {
  // Lấy chiều cao của document
  let docHeight = document.documentElement.scrollHeight;

  window.addEventListener("scroll", () => {
    // Tính phần trăm chiều cao đã scroll
    let scrollPercent = (window.pageYOffset / docHeight) * 100;
    const heroContainer = document.querySelector(".hero");

    // Thay đổi màu nền dựa theo phần trăm scroll
    if (scrollPercent < 15) {
      document.body.style.background = "white";
      heroContainer.style.color = "black";
    } else {
      document.body.style.background = "black";
      heroContainer.style.color = "white";
    }
  });

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <div className="wrapper">
        {/* Section Hero */}
        <section className="hero">
          <Hero />
        </section>

        {/* Section Brand-list */}
        <section className="brand-list">
          {brandLogo.map((item, index) => {
            return <Brand key={item.id} imgUrl={item.imgUrl} />;
          })}
        </section>

        {/* Section Currently */}
        <section className="current">
          <Current />
        </section>

        {/* Footer */}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
