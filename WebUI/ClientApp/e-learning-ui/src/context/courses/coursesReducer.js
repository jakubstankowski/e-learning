import {
    GET_COURSES
} from '../types';

export default (state, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload,
            };
        default:
            return state;
    }
};
