import { FETCH_ROLE_ERROR, FETCH_ROLE_PENDING, FETCH_ROLE_SUCCESS } from '../constants/role.constant'
import { BLOG_FETCH_ERROR, BLOG_FETCH_PENDING, BLOG_FETCH_SUCCESS, BLOG_ID_FETCH_ERROR, BLOG_ID_FETCH_PENDING, BLOG_ID_FETCH_SUCCESS } from '../constants/blog.constant'
import { FETCH_AUTH_ERROR, FETCH_AUTH_SUCCESS } from '../constants/auth.constant'

const initState = {
    token: null,

    // List Role (MC, Beauty, Xe,...)
    listRole: undefined,
    listRolePending: false,

    // List Blog (MC, Beauty, Xe,...)
    listBlog: undefined,
    listBlogPending: false,

    // Blog Detail
    blog: undefined,
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
            state.listRolePending = true
            break
        case FETCH_ROLE_SUCCESS:
            state.listRole = action.payload.data.result
            state.listRolePending = false
            break
        case FETCH_ROLE_ERROR:
            break

        // Fetch Blog by Role
        case BLOG_FETCH_PENDING:
            state.listBlogPending = true
            break
        case BLOG_FETCH_SUCCESS:
            state.listBlogPending = false
            state.listBlog = action.payload
            break
        case BLOG_FETCH_ERROR:
            break

        // Fetch Blog by ID
        case BLOG_ID_FETCH_PENDING:
            state.blogPending = true
            break
        case BLOG_ID_FETCH_SUCCESS:
            state.blogPending = false
            state.blog = action.payload.data
            break;
        case BLOG_ID_FETCH_ERROR:
            break


        default:
            break;
    }

    return { ...state }
}

export default blogReducer;

