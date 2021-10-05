import React from "react";
import {useContext, useEffect} from "react";
import BasketContext from '../../context/basket/basketContext';
import BasketItem from "../basket/BasketItem";

export default function Cart() {
    const basketContext = useContext(BasketContext);

    const {getBasket, basket} = basketContext;

    useEffect(() => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId) {
            getBasket(basketId);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {
                !basket.items || basket.items.length <= 0 ? 'Theres no item in the basket' :

                    basket.items.map((basket) =>
                        <BasketItem
                            basket={basket}
                            key={basket.id}
                        />
                    )
            }
            <h4>
                {
                    basket.totalCount > 0 && `Total Count: ${basket.totalCount} $`
                }
            </h4>
        </div>
    )
}
