import './ListBlog.scss'
import { useParams } from 'react-router-dom';
import { fetchApiBlogAction } from '../../store/actions/blog.action';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

const ListBlog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApiBlogAction())
    }, [])

    const { listBlog } = useSelector(reduxData => reduxData.blogReducer)
    console.log(listBlog)
    // const param = useParams();
    // console.log(param)

    return (
        <div>
            <p>List Blog</p>
        </div>
    );
};

export default ListBlog;