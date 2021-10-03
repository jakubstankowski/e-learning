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
            const basketId = localStorage.getItem('basket_id');

            if (!basketId) {
                localStorage.setItem('basket_id', state.basket.id);
            }

            const isItemIsUnique = state.basket.items.findIndex(i => i.id === action.payload.id) === -1 ?? true;

            if (isItemIsUnique) {
                state.basket.items.push(action.payload);
            }

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
            state.basket.items = state.items.filter(
                basket => basket.id !== action.payload
            );

            return {
                ...state,
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
