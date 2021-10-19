import {
    CREATE_PAYMENT_INTENT
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_INTENT:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
