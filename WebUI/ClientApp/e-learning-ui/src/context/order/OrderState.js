import {
    GET_ORDERS_BY_USER,
    POST_ORDER,
    SET_LOADING
} from '../types';
import React, {useReducer} from "react";
import OrderReducer from "../order/orderReducer";
import axios from "axios";
import OrderContext from "../order/orderContext";
import {navigate} from "@reach/router";


export default function OrderState(props) {
    const initialState = {
        order: {},
        orders: [],
        loading: false
    };

    const [state, dispatch] = useReducer(OrderReducer, initialState);

    const postOrder = async (basketId) => {
        setLoading();
        const res = await axios.post('https://localhost:44367/api/order', {
            basketId: basketId
        })

        dispatch({
            type: POST_ORDER,
            payload: res.data
        })

        navigate('/order');
    }

    const getOrderByUser = async () => {
        setLoading();
        const res = await axios.get('https://localhost:44367/api/order')

        dispatch({
            type: GET_ORDERS_BY_USER,
            payload: res.data
        })
    }

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <OrderContext.Provider
            value={{
                order: state.order,
                postOrder,
                getOrderByUser
            }}
        >
            {props.children}
        </OrderContext.Provider>
    );


}
