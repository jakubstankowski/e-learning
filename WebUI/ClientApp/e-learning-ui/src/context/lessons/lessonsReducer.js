import {
    GET_COURSE_LESSONS,
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
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
