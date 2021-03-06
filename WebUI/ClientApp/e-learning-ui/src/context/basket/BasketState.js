import React, {useReducer} from 'react';
import axios from 'axios';
import BasketContext from './basketContext';
import BasketReducer from './basketReducer';
import {
    GET_BASKET,
    DELETE_BASKET,
    POST_BASKET,
    SET_LOADING
} from '../types';
import uuid from 'uuid/v4';


function BasketState(props) {
    const initialState = {
        id: uuid(),
        items: [],
        loading: false
    }

    const [state, dispatch] = useReducer(BasketReducer, initialState);

    const getBasket = async (id) => {
        setLoading();

        const res = await axios.get(`https://localhost:44367/api/basket/${id}`);

        dispatch({
            type: GET_BASKET,
            payload: res.data
        })
    }

    const postBasket = async (basket) => {
        setLoading();
        const res = await axios.post('https://localhost:44367/api/basket', basket)

        dispatch({
            type: POST_BASKET,
            payload: res.data
        })
    }

    const deleteBasket = async (id) => {
        setLoading();

        const res = await axios.delete(`https://localhost:44367/api/basket/${id}`)

        dispatch({
            type: DELETE_BASKET,
            payload: res.data
        })
    }

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <BasketContext.Provider
            value={{
                id: state.id,
                items: state.items,
                getBasket,
                postBasket,
                deleteBasket
            }}
        >
            {props.children}
        </BasketContext.Provider>
    );

}

export default BasketState;

