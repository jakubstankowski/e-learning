import React from "react";
import {useContext, useEffect} from "react";
import BasketContext from '../../context/basket/basketContext';
import BasketItem from "../../components/basket/BasketItem";
import AuthContext from "../../context/auth/authContext";
import Button from "@material-ui/core/Button";
import {Link} from "@reach/router";
import OrderTotals from "../../components/order/OrderTotals";

export default function Cart() {
    const basketContext = useContext(BasketContext);
    const {getBasket, basket, createBasketPaymentIntent} = basketContext;

    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext;

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
            <OrderTotals/>
            {
                isAuthenticated && basket.items.length > 0 &&
                <Button color="secondary"
                        onClick={() => createBasketPaymentIntent(basket.id)}
                        variant="contained">
                    Proceed to checkout
                </Button>
            }
        </div>
    )
}
