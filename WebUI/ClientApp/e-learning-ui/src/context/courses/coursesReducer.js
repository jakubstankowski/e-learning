import {
    GET_COURSES,
    GET_COURSE,
    SET_LOADING,
    POST_COURSE,
    DELETE_COURSE,
    UPDATE_COURSE
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_COURSES:
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
