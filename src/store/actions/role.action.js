import { FETCH_ROLE_ERROR, FETCH_ROLE_PENDING, FETCH_ROLE_SUCCESS } from '../constants/role.constant'

export const fetchApiRoleAction = () => {
    const vAPI_ROLE_URL = 'http://localhost:8000/api/v1/roles/'

    return async (dispatch) => {

        try {
            let requestOptions = {
                method: 'GET',
            }

            await dispatch({
                type: FETCH_ROLE_PENDING
            })

            let response = await fetch(vAPI_ROLE_URL, requestOptions)
            let data = await response.json();

            return dispatch({
                type: FETCH_ROLE_SUCCESS,
                payload: data
            })

        } catch (error) {
            return dispatch({
                type: FETCH_ROLE_ERROR,
                error: error.message
            })
        }

    }
}