import "./Current.scss";

const Current = () => {
  return (
    <>
      <h2 className="current-title">CURRENTLY</h2>
      <div className="current-video">
        <video
          src="https://www.anthonydesigner.com/static/av-flag-video-3e2a0cc191bb00238afe5c841ccdc5d1.mp4"
          autoPlay
          loop
          playsInline
          muted
        ></video>
        <p className="current-desc">
          HELPING
          <br />
          BRANDS WIN.
        </p>
      </div>
    </>
  );
};

export default Current;
