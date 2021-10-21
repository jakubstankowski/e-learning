import React, {useContext, useState} from "react";
import BasketContext from "../../context/basket/basketContext";
import PaymentsContext from "../../context/payments/paymentsContext";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

export default function Checkout() {
    const stripe = useStripe()
    const elements = useElements()

    const basketContext = useContext(BasketContext);
    const {basket} = basketContext;

    const paymentContext = useContext(PaymentsContext);
    const {createPaymentIntent} = paymentContext;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        await createPaymentIntent(basket.id);

        const {paymentIntent, error} = await stripe.confirmCardPayment(
            basket.clientSecret,
            {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },
        );

        if (error) {
            alert('error!');
        }

        if (paymentIntent) {
            alert('payment intent!');
        }

    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement/>
                    </div>
                </fieldset>
                <button>Pay</button>
            </form>
        </>
    )
}
