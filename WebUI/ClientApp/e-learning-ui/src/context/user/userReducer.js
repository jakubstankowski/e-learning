import {
    GET_USER_COURSES,
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_USER_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
