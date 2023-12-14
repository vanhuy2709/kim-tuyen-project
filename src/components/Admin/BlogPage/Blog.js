import "./Blog.scss";
import LeftSide from "./LeftSide/LeftSide";
import MainContent from "./MainContent/MainContent";
import RightSide from "./RightSide/RightSide";
import { useParams } from "react-router-dom";
import { fetchApiBlogByIdAction } from "../../../store/actions/blog.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress } from '@mui/material';

const Blog = (props) => {
  const dispatch = useDispatch();
  const { idBlog } = useParams();

  useEffect(() => {
    dispatch(fetchApiBlogByIdAction(idBlog))
  }, [dispatch, idBlog])

  const { blog, blogPending } = useSelector(reduxData => reduxData.blogReducer)

  if (props) {
    console.log(true);
  }
  else {
    console.log(false);
  }

  return (
    <section className="blog">
      <div className="left">
        <LeftSide />
      </div>
      <div className="main">

        {blogPending ?
          (<CircularProgress />)
          :
          (<MainContent
            mainImage={blog ? blog.thumb : ''}
            title={blog ? blog.title : ''}
            param={blog ? blog.description : ''}
            listVideo={blog ? blog.video : ''}
            listPhoto={blog ? blog.photo : ''}
            color={blog ? blog.color : ''}
          />)}

      </div>
      <div className="right">
        <RightSide />
      </div>
    </section>
  );
};

export default Blog;
