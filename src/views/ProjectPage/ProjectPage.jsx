import React from "react";
import "./ProjectPage.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="project">
      <div className="wrapper">
        <div className="project-container">
          <div
            className="project__item"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="project__item-content">
              <h2 className="project__item-content--title">
                Master of Ceremony
              </h2>
              <p className="project__item-content--desc">
                Who guides the event program, introduces speakers and
                performers, and engages the audience with charm and wit. The
                role requires excellent public speaking skills, organization,
                and professionalism to lead a polished event.
              </p>
              <button className="project__item-content--btn">
                <i className="fa-solid fa-arrow-right"></i>
                <Link to="/project/mc" className="btn-read">
                  Read more
                </Link>
              </button>
            </div>
            <div className="project__item-thumb">
              <img
                src="https://media.istockphoto.com/id/1437738538/vi/anh/m%E1%BB%99t-ng%C6%B0%E1%BB%9Di-d%E1%BA%ABn-ch%C6%B0%C6%A1ng-tr%C3%ACnh-game-show-nam-%C4%91ang-tr%C3%ACnh-b%C3%A0y-cu%E1%BB%99c-thi.jpg?s=2048x2048&w=is&k=20&c=qf32V4mZYDo663kR0ON2jeCEvCUzX-409NS37sSBMkQ="
                alt="project-thumb"
                className="project__item-thumb--image"
              />
            </div>
          </div>
          <div
            className="project__item"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="project__item-content">
              <h2 className="project__item-content--title">Styling</h2>
              <p className="project__item-content--desc">
                Styling involves intentional choices in clothing, accessories,
                hair, and makeup to craft a particular aesthetic. Styling
                demonstrates skill in combining visual elements like color,
                texture, and silhouette to create a desired look and image.
              </p>
              <button className="project__item-content--btn">
                <i className="fa-solid fa-arrow-right"></i>
                <Link to="/project/styling" className="btn-read">
                  Read more
                </Link>
              </button>
            </div>
            <div className="project__item-thumb">
              <img
                src="https://images.unsplash.com/photo-1602564524425-69f1cfa037eb?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project-thumb"
                className="project__item-thumb--image"
              />
            </div>
          </div>
          <div
            className="project__item"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="project__item-content">
              <h2 className="project__item-content--title">Beauty</h2>
              <p className="project__item-content--desc">
                The subjective experience of pleasure or satisfaction derived
                from the visual appeal, aesthetic qualities and physical
                attributes of a person, place, object or idea. Beauty lifts the
                human spirit and transcends the mundane throuagh the sublime.
              </p>
              <button className="project__item-content--btn">
                <i className="fa-solid fa-arrow-right"></i>
                <Link to="/project/beauty" className="btn-read">
                  Read more
                </Link>
              </button>
            </div>
            <div className="project__item-thumb">
              <img
                src="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project-thumb"
                className="project__item-thumb--image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
