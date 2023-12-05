import { FETCH_ROLE_ERROR, FETCH_ROLE_PENDING, FETCH_ROLE_SUCCESS } from '../constants/role.constant'
import { BLOG_FETCH_ERROR, BLOG_FETCH_PENDING, BLOG_FETCH_SUCCESS } from '../constants/blog.constant'
import { FETCH_AUTH_ERROR, FETCH_AUTH_SUCCESS } from '../constants/auth.constant'

const initState = {
    token: null,

    // List Role (MC, Beauty, Xe,...)
    listRole: undefined,
    rolePending: false,

    // List Blog
    listBlog: undefined,
    blogPending: false
}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        // Fetch Auth
        case FETCH_AUTH_ERROR:
            break
        case FETCH_AUTH_SUCCESS:
            state.token = action.payload.data.access_token
            break

        // Fetch Role
        case FETCH_ROLE_PENDING:
            state.rolePending = true
            break
        case FETCH_ROLE_SUCCESS:
            state.listRole = action.payload
            state.rolePending = false
            break
        case FETCH_ROLE_ERROR:
            break

        // Fetch Blog
        case BLOG_FETCH_PENDING:
            state.blogPending = true
            break
        case BLOG_FETCH_SUCCESS:
            state.blogPending = false
            state.listBlog = action.payload.data.result
            break
        case BLOG_FETCH_ERROR:
            break
        default:
            break;
    }

    return { ...state }
}

export default blogReducer;

