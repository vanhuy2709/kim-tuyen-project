import './ListBlog.scss'
import '../../styles/global.scss'
import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchApiBlogAction } from '../../store/actions/blog.action';
import { CircularProgress } from '@mui/material'

const ListBlog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { idRole } = useParams();

  useEffect(() => {
    dispatch(fetchApiBlogAction(idRole))
  }, [dispatch, idRole])

  const { listBlog, listBlogPending } = useSelector(reduxData => reduxData.blogReducer)

  const handleViewBlog = (idBlog) => {
    navigate(location.pathname + '/' + idBlog);
  }

  return (
    <section className='list-blog'>
      <div className='wrapper'>
        <div className='list-blog-container'>

          {/* Blog Card */}
          {listBlogPending ?
            (<CircularProgress />)
            :
            (listBlog && listBlog.length > 0 && listBlog.map((blog, index) => (
              <div key={blog._id} className='blog-card' onClick={() => handleViewBlog(blog._id)}>
                <div className='image'>
                  <img
                    // src={`https://drive.google.com/uc?export=view&id=${blog.thumb}`}
                    src={`https://drive.google.com/thumbnail?id=${blog.thumb}&sz=w1000`}
                    className='blog-card__image'
                    alt='img'
                  />
                </div>
                <div className='content'>
                  <div className='content__title'>
                    <i className="fa-solid fa-minus"></i>
                    <h4 href='/' className='blog-card__title'>{blog.title}</h4>
                  </div>
                  <p className='blog-card__brand'>KimBling</p>
                </div>
              </div>
            )))}
        </div>
      </div>
    </section>
  );
};

export default ListBlog;