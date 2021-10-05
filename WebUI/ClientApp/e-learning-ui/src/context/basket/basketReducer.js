import {
    UPDATE_BASKET,
    GET_BASKET,
    DELETE_BASKET, REMOVE_ITEM_FROM_BASKET, ADD_ITEM_TO_BASKET
} from '../types';
import {uuid} from "uuidv4";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        case ADD_ITEM_TO_BASKET:
            const isItemIsUnique = state.basket.items.findIndex(i => i.id === action.payload.id) === -1 ?? true;

            if (isItemIsUnique) {
                state.basket.items.push(action.payload);
            }

            return {
                ...state,
                loading: false
            }
        case UPDATE_BASKET:
            return {
                ...state,
                basket: action.payload,
                loading: false
            };
        case REMOVE_ITEM_FROM_BASKET: {
            state.basket.items = state.basket.items.filter(
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
                basket: {
                    id: uuid(),
                    items: [],
                    totalCount: null
                }
            };
        default:
            return state;
    }
};

export default reducer
