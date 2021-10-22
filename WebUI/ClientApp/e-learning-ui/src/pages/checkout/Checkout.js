import React, {useContext, useState} from "react";
import BasketContext from "../../context/basket/basketContext";
import PaymentsContext from "../../context/payments/paymentsContext";
import {
    useStripe, useElements,
    CardExpiryElement,
    CardNumberElement,
    CardCvcElement
} from '@stripe/react-stripe-js';
import Button from "@material-ui/core/Button";
import './Checkout.css';
import Grid from "@material-ui/core/Grid";
import OrderTotals from "../../components/order/OrderTotals";

const ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '18px',
            color: '#424770',
            letterSpacing: '0.025em',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

export default function Checkout() {
    const stripe = useStripe()
    const elements = useElements()

    const basketContext = useContext(BasketContext);
    const {basket} = basketContext;

    const paymentContext = useContext(PaymentsContext);
    const {createPaymentIntent} = paymentContext;

    const [name, setName] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement);

        if (card == null) {
            return;
        }

        const createdPayment = await createPaymentIntent(basket.id);

        const {paymentIntent, error} = await stripe.confirmCardPayment(
            createdPayment.clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name
                    },
                },
            },
        );

        if (error) {
            console.error('[error]: ', error);
            setErrorMessage(error.message);
        }

        if (paymentIntent) {
            alert('payment intent!');
        }

    };


    return (
        <Grid container>
            <Grid item xs={12} lg={6} className="checkout-element">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        required
                        placeholder="Full Name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <label htmlFor="cardNumber">Card Number</label>
                    <CardNumberElement
                        id="cardNumber"
                        options={ELEMENT_OPTIONS}
                    />
                    <label htmlFor="expiry">Card Expiration</label>
                    <CardExpiryElement
                        id="expiry"
                        options={ELEMENT_OPTIONS}
                    />
                    <label htmlFor="cvc">CVC</label>
                    <CardCvcElement
                        id="cvc"
                        options={ELEMENT_OPTIONS}
                    />
                    {errorMessage && 'Payment Error!'}
                </form>
            </Grid>
            <Grid item xs={12} lg={6} className="checkout-element">
                <OrderTotals/>
                <Button color="secondary"
                        variant="contained"
                        type="submit"
                        className="pay-button"
                        onClick={() => onSubmit()}
                        disabled={!stripe}>
                    Finalize Payment
                </Button>
            </Grid>
        </Grid>
    )
}
