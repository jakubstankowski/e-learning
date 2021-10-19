import {
    SET_LOADING
} from '../types';
import React, {useReducer} from "react";
import PaymentsReducer from "../payments/paymentsReducer";
import axios from "axios";
import PaymentsContext from "../payments/paymentsContext";


export default function OrderState(props) {
    const initialState = {
        loading: false
    };

    const [state, dispatch] = useReducer(PaymentsReducer, initialState);


    const createPaymentIntent = async (basketId) => {
        setLoading();
        const res = await axios.get(`https://localhost:44367/api/payments/${basketId}`)

        console.log('res', res);
    }

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <PaymentsContext.Provider
            value={{
                createPaymentIntent
            }}
        >
            {props.children}
        </PaymentsContext.Provider>
    );


}
