import "./Brand.scss";
import brandLogo from "../../assets/images/dataImg";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="wrapper">
      <div className="brand-list">
        {brandLogo.map((item, index) => {
          return (
            <Link to={`/project/${item.idRole}/${item.idBlog}`} key={item.id}>
              <div className="brand-box">
                <img
                  src={item.imgUrl}
                  alt="brand-logo"
                  className="brand-logo"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
