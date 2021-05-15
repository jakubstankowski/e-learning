import {
    GET_USER_COURSES,
    SET_LOADING,
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_USER_COURSES:
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
