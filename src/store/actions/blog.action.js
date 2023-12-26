import { BLOG_FETCH_ERROR, BLOG_FETCH_PENDING, BLOG_FETCH_SUCCESS, BLOG_ID_FETCH_ERROR, BLOG_ID_FETCH_PENDING, BLOG_ID_FETCH_SUCCESS } from '../constants/blog.constant';

export const fetchApiBlogAction = (idRole) => {
    const vAPI_BLOG_URL = `http://kimtuyen.blog:8000/api/v1/blog/find/?value=${idRole}`

    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET'
            }

            await dispatch({
                type: BLOG_FETCH_PENDING
            })

            const response = await fetch(vAPI_BLOG_URL, requestOptions);
            const data = await response.json();

            return dispatch({
                type: BLOG_FETCH_SUCCESS,
                payload: data.data
            })

        } catch (error) {
            return dispatch({
                type: BLOG_FETCH_ERROR,
                error: error.message
            })
        }
    }
}

export const fetchApiBlogByIdAction = (idBlog) => {
    const vAPI_BLOG_URL = `http://kimtuyen.blog:8000/api/v1/blog/${idBlog}`

    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'GET'
            }

            await dispatch({
                type: BLOG_ID_FETCH_PENDING
            })

            const response = await fetch(vAPI_BLOG_URL, requestOptions);
            const data = await response.json();

            return dispatch({
                type: BLOG_ID_FETCH_SUCCESS,
                payload: data
            })

        } catch (error) {
            return dispatch({
                type: BLOG_ID_FETCH_ERROR,
                error: error.message
            })
        }
    }
}