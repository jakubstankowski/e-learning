import {
    GET_COURSE_LESSONS,
    GET_LESSON,
    POST_LESSON,
    DELETE_LESSON,
    UPDATE_LESSON,
    SET_LOADING,
    LESSON_ERROR
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_COURSE_LESSONS:
            return {
                ...state,
                lessons: action.payload,
                loading: false
            };
        case GET_LESSON:
            return {
                ...state,
                lesson: action.payload,
                loading: false
            };
        case POST_LESSON:
            return {
                ...state,
                lessons: action.payload,
                loading: false
            };
        case DELETE_LESSON:
            return {
                ...state,
                lessons: action.payload,
                loading: false
            };
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: action.payload,
                loading: false
            };
        case LESSON_ERROR:
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
