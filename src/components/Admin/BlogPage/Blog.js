import "./Blog.scss";
import LeftSide from "./LeftSide/LeftSide";
import MainContent from "./MainContent/MainContent";
import RightSide from "./RightSide/RightSide";
// import urlVideo from "../../../assets/videos/Heineken Vũng Tàu - nhà máy bia của tương lai - Kinh doanh - ZINGNEWS.VN.mp4";
import { useParams } from "react-router-dom";
import { fetchApiBlogByIdAction } from "../../../store/actions/blog.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Blog = () => {
  const dispatch = useDispatch();
  const { idBlog } = useParams();

  useEffect(() => {
    dispatch(fetchApiBlogByIdAction(idBlog))
  }, [dispatch, idBlog])

  const { blog } = useSelector(reduxData => reduxData.blogReducer)
  // console.log(blog);

  return (
    <section className="blog">
      <div className="left">
        <LeftSide />
      </div>
      <div className="main">
        <MainContent
          mainImage={blog ? blog.thumb : ''}
          title={blog ? blog.title : ''}
          param={blog ? blog.description : ''}
          listVideo={blog ? blog.video : ''}
          listPhoto={blog ? blog.photo : ''}
        />
      </div>
      <div className="right">
        <RightSide />
      </div>
    </section>
  );
};

export default Blog;
