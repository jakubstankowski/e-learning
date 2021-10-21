import React, {useEffect, useContext} from "react";
import BasketContext from "../../context/basket/basketContext";
import {Container} from "@material-ui/core";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';

const stripeTestPromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Layout({children}) {
    const basketContext = useContext(BasketContext);
    const {getBasket} = basketContext;

    useEffect(() => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId) {
            getBasket(basketId);
        }

        // eslint-disable-next-line
    }, []);

    return (
        <Elements stripe={stripeTestPromise}>
            <Container maxWidth="lg"
                       className="container">
                {children}
            </Container>
        </Elements>
    )

}
