import { FETCH_ROLE_ERROR, FETCH_ROLE_PENDING, FETCH_ROLE_SUCCESS } from '../constants/role.constant'
import axios from 'axios'

export const fetchApiRoleAction = (inputToken) => {
    const vAPI_ROLE_URL = 'http://kimtuyen.blog:8000/api/v1/roles/'

    return async (dispatch) => {

        try {
            let config = {
                method: 'GET',
                maxBodyLength: Infinity,
                url: vAPI_ROLE_URL,
            }

            await dispatch({
                type: FETCH_ROLE_PENDING
            })

            let responseData = await axios.request(config);

            return dispatch({
                type: FETCH_ROLE_SUCCESS,
                payload: responseData.data
            })

        } catch (error) {
            return dispatch({
                type: FETCH_ROLE_ERROR,
                error: error.message
            })
        }

    }
}