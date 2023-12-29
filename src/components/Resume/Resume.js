import "./Resume.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="wrapper">
      <div className="resume">
        <div
          className="resume__left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            "Xây dựng thương hiệu cá nhân là hành trình không đích đến, bản thân
            có giá trị sẽ tạo nên giá trị" - <span>KIM BLING</span>
          </p>
          <p>
            <span>KIM BLING</span> luôn theo đuổi hành trình tạo ra giá
            trị cho cộng đồng, mong muốn lan toả, truyền tải những điều ý nghĩa
            tích cực.
          </p>
          <p>
            Quan điểm sống "KHÔNG GÌ LÀ KHÔNG THỂ" và xem "THÁI ĐỘ" là tiêu chí
            tiên quyết khi giải quyết vấn đề.
          </p>
          <p>
            Tâm hồn nghệ sĩ, yêu những giai điệu và không ngại thử
            thách.
          </p>
        </div>
        <div
          className="resume__right"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ul className="education">
            <li className="education--title">EDUCATION</li>
            <li className="education--content">
              VNU University of Social Sciences and Humanities
              <br />
              LINGUISTIC SECTOR, 2022
            </li>
          </ul>

          <ul className="experience">
            <li className="experience--title">EXPERIENCE</li>
            <li className="experience--content">
              HOSTING How2Money, ZReview, ZWeather...
              <br />
              ZNEWS, 6/2021
            </li>
            <li className="experience--content">
              MC News 24h, Blockchain Event
              <br />
              GFI BLOCKCHAIN, 2021-2022
            </li>
            <li className="experience--content">
              Host Glowie Spotlight Streetstyle
              <br />
              GLOWIE APP, 2021-2022
            </li>
            <li className="experience--content">
              FREELANCE MC, MODEL, KOL,...
              <br />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
