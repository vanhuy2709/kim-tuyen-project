import "./ProjectPage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchApiRoleAction } from '../../store/actions/role.action'
import { useSelector, useDispatch } from 'react-redux'

const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const dispatch = useDispatch();

  const { listRole } = useSelector(reduxData => reduxData.blogReducer)

  useEffect(() => {
    dispatch(fetchApiRoleAction());
  }, [dispatch])

  return (
    <section className="project">
      <div className="wrapper">
        <div className="project-container">
          {listRole && listRole.length > 0 && listRole.map(role => (
            <div
              key={role._id}
              className="project__item"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="project__item-content">
                <h2 className="project__item-content--title">
                  {role.nameRole}
                </h2>
                <p className="project__item-content--desc">{role.description}</p>
                <button className="project__item-content--btn">
                  <i className="fa-solid fa-arrow-right"></i>
                  <Link to={`/project/${role._id}`} className="btn-read">
                    Read more
                  </Link>
                </button>
              </div>
              <div className="project__item-thumb">
                <img
                  src={role.thumb}
                  alt="project-thumb"
                  className="project__item-thumb--image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
