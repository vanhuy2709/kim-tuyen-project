import {
  POST_FETCH_ERROR,
  POST_FETCH_PENDING,
  POST_FETCH_SUCCESS,
} from "../constants/post.constant";

const initialState = {
  listPost: [],
  pending: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCH_PENDING:
      state.pending = true;
      break;
    case POST_FETCH_SUCCESS:
      state.pending = false;
      state.listPost = action.data;
      break;
    case POST_FETCH_ERROR:
      break;
    default:
      break;
  }
  return { ...state };
};

export default postReducer;
