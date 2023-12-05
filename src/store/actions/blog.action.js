import { BLOG_FETCH_ERROR, BLOG_FETCH_PENDING, BLOG_FETCH_SUCCESS } from '../constants/blog.constant';

export const fetchApiBlogAction = () => {
    const vAPI_BLOG_URL = 'http://localhost:8000/api/v1/blog/'

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
                payload: data
            })

        } catch (error) {
            return dispatch({
                type: BLOG_FETCH_ERROR,
                error: error.message
            })
        }
    }
}