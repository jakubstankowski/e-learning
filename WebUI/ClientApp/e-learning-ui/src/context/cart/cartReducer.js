import {
    POST_CART,
    GET_CART,
    DELETE_CART
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false
            };
        case POST_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false
            };
        case DELETE_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer
