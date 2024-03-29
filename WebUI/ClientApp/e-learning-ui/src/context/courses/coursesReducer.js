import {
    GET_HOME_COURSES,
    GET_USER_COURSES,
    GET_ADMIN_COURSES,
    GET_COURSE,
    SET_LOADING,
    POST_COURSE,
    DELETE_COURSE,
    COURSE_ERROR,
    UPDATE_COURSE,
    RESET_COURSES
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_HOME_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case GET_ADMIN_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case GET_USER_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case GET_COURSE:
            return {
                ...state,
                course: action.payload,
                loading: false
            };
        case POST_COURSE:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case DELETE_COURSE:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case UPDATE_COURSE:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case RESET_COURSES:
            return {
                ...state,
                courses: []
            };
        case COURSE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default reducer;
