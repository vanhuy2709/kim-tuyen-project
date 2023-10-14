import "./Brand.scss";
import brandLogo from "../../../assets/images/dataImg";

const Brand = (props) => {
  return (
    <div className="wrapper">
      <div className="brand-list">
        {brandLogo.map((item, index) => {
          return (
            <div className="brand-box" key={item.id}>
              <img src={item.imgUrl} alt="brand-logo" className="brand-logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
