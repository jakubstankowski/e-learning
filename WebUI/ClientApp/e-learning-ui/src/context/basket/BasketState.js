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

import {uuid} from 'uuidv4';


function BasketState(props) {
    const initialState = {
        basket: {
            id: uuid(),
            items: []
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

    const addItemToBasket = (item) => {
        const itemToAdd = mapCourseItemToBasketItem(item);

        const basketId = localStorage.getItem('basket_id');

        if (basketId === null) {
            createBasket();
        }

        state.basket.items = addItem(state.basket.items, itemToAdd);
    };

    const createBasket = () => {
        localStorage.setItem('basket_id', state.basket.id);
        return state.basket;
    };


    const addItem = (items, item) => {
        const index = items.findIndex(item => item.id === item);

        if (index === -1) {
            items.push(item);
        }

        return items;
    }

    const mapCourseItemToBasketItem = (item) => {
        return {
            id: item.id,
            title: item.title
        }
    }

    const postBasket = async () => {
        setLoading();
        const res = await axios.post('https://localhost:44367/api/basket')

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
                basket: state.basket,
                getBasket,
                postBasket,
                deleteBasket,
                addItemToBasket
            }}
        >
            {props.children}
        </BasketContext.Provider>
    );

}

export default BasketState;

