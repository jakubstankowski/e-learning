import {
    POST_ORDER
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case POST_ORDER:
            return {
                ...state,
                order: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
