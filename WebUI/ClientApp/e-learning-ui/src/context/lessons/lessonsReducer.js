import {
    GET_COURSE_LESSONS,
    GET_LESSON,
    SET_LOADING,
} from '../types';

export default (state, action) => {
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
                loading: true
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
