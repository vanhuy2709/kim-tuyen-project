import "./MainContent.scss";
import ReactPlayer from "react-player";

function MainContent(props) {
  const backgroundImage = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1516128043650-037fbdbd0b6e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  };

  return (
    <div className="main-content">
      <div className="main-content__background" style={backgroundImage}>
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
