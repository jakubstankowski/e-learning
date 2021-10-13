import React from "react";
import {useContext, useEffect} from "react";
import BasketContext from '../../context/basket/basketContext';
import OrderContext from '../../context/order/orderContext';
import BasketItem from "../../components/basket/BasketItem";
import AuthContext from "../../context/auth/authContext";
import Button from "@material-ui/core/Button";

export default function Cart() {
    const basketContext = useContext(BasketContext);
    const {getBasket, basket} = basketContext;

    const orderContext = useContext(OrderContext);
    const {postOrder} = orderContext;


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
            <h4>
                {
                    basket.subTotal > 0 && `Total Count: ${basket.subTotal} $`
                }
            </h4>
            {
                isAuthenticated && basket.items.length > 0 &&
                <Button color="secondary"
                        onClick={() => postOrder(basket.id)}
                        variant="contained">
                    Finish Order
                </Button>
            }
        </div>
    )
}
