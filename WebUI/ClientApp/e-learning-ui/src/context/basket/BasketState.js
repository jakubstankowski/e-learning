import React, {useContext, useReducer} from 'react';
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
        });
    }

    const addItemToBasket = async (item) => {
        const basketId = localStorage.getItem('basket_id');

        if (!basketId) {
            console.log('state', state)
            localStorage.setItem('basket_id', state.basket.id);
        }

        dispatch({
            type: ADD_ITEM_TO_BASKET,
            payload: item
        });

        updateBasket(state.basket);
    };

    const removeItemFromBasket = (id) => {
        dispatch({
            type: REMOVE_ITEM_FROM_BASKET,
            payload: id
        });

        //TODO find better way, its a hack!
        setTimeout(() => {
            if (state.basket.items.length >= 1) {
                updateBasket(state.basket);
            } else {
                deleteBasket(state.basket.id);
            }
        }, 500);
    }


    const updateBasket = async (basket) => {
        const res = await axios.post('https://localhost:44367/api/basket', basket)

        dispatch({
            type: UPDATE_BASKET,
            payload: res.data
        });
    }

    const deleteBasket = async (id) => {
        setLoading();

        await axios.delete(`https://localhost:44367/api/basket/${id}`)

        localStorage.removeItem('basket_id');
    }

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <BasketContext.Provider
            value={{
                basket: state.basket,
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

