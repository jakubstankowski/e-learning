import React from "react";
import {useContext, useEffect} from "react";
import BasketContext from '../../context/basket/basketContext';

export default function Cart() {
    const basketContext = useContext(BasketContext);

    const {getBasket, basket} = basketContext;

    useEffect(() => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId) {
            getBasket(basketId)
                .then((res) => {
                    console.log('get basket res: ', res);
                })
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            cart
        </div>
    )
}
