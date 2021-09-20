import {
    POST_BASKET,
    GET_BASKET,
    DELETE_BASKET
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        case POST_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        case DELETE_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer
