import "./MainContent.scss";
// import ReactPlayer from "react-player";

// linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), (extra)

function MainContent({ mainImage, title, param, listVideo, listPhoto }) {
  const backgroundImage = {
    backgroundImage: `url(https://drive.google.com/uc?export=view&id=${mainImage})`,
    backgroundSize: "cover",
  };

  // console.log(props.listVideo);

  return (
    <div className="main-content">
      <div className="main-content__background" style={backgroundImage}>
        {/* <img src={props.mainImage} alt="main" className="main-content__image" /> */}
      </div>

      <div className="post">
        <h2 className="post__title">{title}</h2>
        <p className="post__param">{param}</p>

        {listVideo && listVideo.length > 0 && listVideo.map((video, index) => (
          <div className="post__video" key={index}>
            <iframe src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        ))}

        <div>
          {listPhoto && listPhoto.length > 0 && listPhoto.map((photo, index) => (
            <img key={index} src={`https://drive.google.com/uc?export=view&id=${photo}`} alt="abc" className="post__photo" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
