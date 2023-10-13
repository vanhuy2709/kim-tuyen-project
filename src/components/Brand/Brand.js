import "./Brand.scss";

const Brand = (props) => {
  const imgUrl = props.imgUrl;

  return (
    <div className="brand-box">
      <img src={imgUrl} alt="brand-logo" className="brand-logo" />
    </div>
  );
};

export default Brand;
