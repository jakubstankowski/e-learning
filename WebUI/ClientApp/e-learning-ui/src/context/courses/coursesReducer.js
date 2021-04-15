import {
    GET_COURSES,
    GET_COURSE,
    SET_LOADING
} from '../types';

export default (state, action) => {
    console.log('state:', state);
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
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
