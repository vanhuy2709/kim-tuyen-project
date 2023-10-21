import "./Blog.scss";
import LeftSide from "./LeftSide/LeftSide";
import MainContent from "./MainContent/MainContent";
import RightSide from "./RightSide/RightSide";
import mainImage from "../../../assets/images/heineken-logo.png";
import urlVideo from "../../../assets/videos/Heineken Vũng Tàu - nhà máy bia của tương lai - Kinh doanh - ZINGNEWS.VN.mp4";

const Blog = (props) => {
  return (
    <section className="blog">
      <div className="left">
        <LeftSide />
      </div>
      <div className="main">
        <MainContent
          mainImage={mainImage}
          title="Going Metro with Latif Blessing"
          param="We were thrilled to collaborate with Los Angeles's newest sports team, LAFC and the talented crew at Friendly Filmworks to tell fans how to get to the new Banc of California Stadium in Exposition Park via the Los Angeles Metro Expo Line."
          urlVideo={urlVideo}
        />
      </div>
      <div className="right">
        <RightSide />
      </div>
    </section>
  );
};

export default Blog;
