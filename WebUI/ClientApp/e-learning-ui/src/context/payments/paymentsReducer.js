import {
    CREATE_PAYMENT_INTENT, SET_PAYMENT_CLIENT_SECRET
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_PAYMENT_CLIENT_SECRET:
            return {
                ...state,
                clientSecret: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
