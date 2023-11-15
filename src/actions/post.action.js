import {
  POST_FETCH_PENDING,
  POST_FETCH_SUCCESS,
  POST_FETCH_ERROR,
} from "../constants/post.constant";
import axios from "axios";

export const fetchApiPostAction = () => {
  return async (dispatch) => {
    try {
      let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: "https://jsonplaceholder.typicode.com/posts",
      };

      await dispatch({
        type: POST_FETCH_PENDING,
      });

      const response = await axios.request(config);
      const dataPost = response.data;

      return dispatch({
        type: POST_FETCH_SUCCESS,
        data: dataPost,
      });
    } catch (error) {
      return dispatch({
        type: POST_FETCH_ERROR,
        error: error.message,
      });
    }
  };
};
