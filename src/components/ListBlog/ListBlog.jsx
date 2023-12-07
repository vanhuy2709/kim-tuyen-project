import './ListBlog.scss'
import '../../styles/global.scss'
import { useParams } from 'react-router-dom';
import { fetchApiBlogAction } from '../../store/actions/blog.action';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import image from '../../assets/images/IMG_4101.JPG'

const ListBlog = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const idRole = param.idRole;

    useEffect(() => {
        dispatch(fetchApiBlogAction(idRole))
    }, [dispatch, idRole])

    const { listBlog } = useSelector(reduxData => reduxData.blogReducer)
    // console.log(listBlog)

    return (
        <section className='list-blog'>
            <div className='wrapper'>
                <div className='list-blog-container'>

                    {/* Blog Card */}
                    <div className='blog-card'>
                        <div className='image'>
                            <img src={image} className='blog-card__image' alt='img' />
                        </div>
                        <div className='content'>
                            <h4 className='blog-card__title'>Golden Pencil</h4>
                            <p className='blog-card__brand'>Branding</p>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <div className='image'>
                            <img src={image} className='blog-card__image' alt='img' />
                        </div>
                        <div className='content'>
                            <h4 className='blog-card__title'>Golden Pencil</h4>
                            <p className='blog-card__brand'>Branding</p>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <div className='image'>
                            <img src={image} className='blog-card__image' alt='img' />
                        </div>
                        <div className='content'>
                            <h4 className='blog-card__title'>Golden Pencil</h4>
                            <p className='blog-card__brand'>Branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListBlog;