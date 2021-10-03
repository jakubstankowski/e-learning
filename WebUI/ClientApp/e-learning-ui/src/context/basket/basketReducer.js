import {
    UPDATE_BASKET,
    GET_BASKET,
    DELETE_BASKET, REMOVE_ITEM_FROM_BASKET, ADD_ITEM_TO_BASKET
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        case ADD_ITEM_TO_BASKET:
            state.basket.items.push(action.payload);
            return {
                ...state,
            }
        case UPDATE_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        case REMOVE_ITEM_FROM_BASKET: {
            return {
                ...state,
                items: state.items.filter(
                    basket => basket.id !== action.payload
                ),
                loading: false
            }
        }
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
