import React, {useReducer} from 'react';
import axios from 'axios';
import BasketContext from './basketContext';
import BasketReducer from './basketReducer';
import {
    GET_BASKET,
    DELETE_BASKET,
    UPDATE_BASKET,
    REMOVE_ITEM_FROM_BASKET,
    ADD_ITEM_TO_BASKET,
    SET_LOADING,
} from '../types';

import {uuid} from 'uuidv4';


function BasketState(props) {
    const initialState = {
        basket: {
            id: uuid(),
            items: [],
        },
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

    const addItemToBasket = async (item) => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId === null) {
            createBasket();
        }

        dispatch({
            type: ADD_ITEM_TO_BASKET,
            payload: item
        })

        updateBasket(state.basket);
    };

    const createBasket = () => {
        localStorage.setItem('basket_id', state.id);
    };

    const removeItemFromBasket = (id) => {
        dispatch({
            type: REMOVE_ITEM_FROM_BASKET,
            payload: id
        })
    }

    const addItem = (items, item) => {
        const index = items.findIndex(i => i.id === item.id);

        if (index === -1) {
            items.push(item);
        }

        return items;
    }

    const updateBasket = async (basket) => {
        const res = await axios.post('https://localhost:44367/api/basket', basket)

        dispatch({
            type: UPDATE_BASKET,
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
                items: state.items,
                id: state.id,
                getBasket,
                updateBasket,
                deleteBasket,
                removeItemFromBasket,
                addItemToBasket
            }}
        >
            {props.children}
        </BasketContext.Provider>
    );

}

export default BasketState;

