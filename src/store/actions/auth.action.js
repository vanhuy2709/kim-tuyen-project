import { FETCH_AUTH_ERROR, FETCH_AUTH_SUCCESS } from '../constants/auth.constant';

export const fetchApiAuthAction = () => {
    return async (dispatch) => {
        try {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            myHeaders.append("Cookie", "refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjU1MzI4MDMwMDQyZmE0ZjlmMTA5MTc2IiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcwMTc1NDMwNiwiZXhwIjoxNzAxODQwNzA2fQ.eevTxE6wlitZ_Uva_DtyfIjk6aU5lHV1tiYtLrhx6Kw");

            let urlencoded = new URLSearchParams();
            urlencoded.append("username", "admin");
            urlencoded.append("password", "123456");

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            let response = await fetch("http://kimtuyen.blog/api/v1/auth/login", requestOptions)
            let data = await response.json();

            return dispatch({
                type: FETCH_AUTH_SUCCESS,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: FETCH_AUTH_ERROR,
                error: error.message
            })
        }
    }
}