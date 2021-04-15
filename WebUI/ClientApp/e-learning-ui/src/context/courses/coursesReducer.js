import {
    GET_COURSES,
    GET_COURSE
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload,
            };
        case GET_COURSE:
            return {
                ...state,
                course: action.payload,
            };
        default:
            return state;
    }
};
