import "./MainContent.scss";
import ReactPlayer from "react-player";

function MainContent(props) {
  console.log(props);
  return (
    <div className="main-content">
      <div className="main-content__background">
        <img src={props.mainImage} alt="main" className="main-content__image" />
      </div>

      <div className="post">
        <h2 className="post__title">{props.title}</h2>
        <p className="post__param">{props.param}</p>
        <div className="post__video">
          <div style={{ overflow: "hidden" }}>
            <ReactPlayer
              url={props.urlVideo}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
