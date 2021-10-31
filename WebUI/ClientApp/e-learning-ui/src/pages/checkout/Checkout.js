import React, {useContext, useState} from "react";
import BasketContext from "../../context/basket/basketContext";
import OrderContext from "../../context/order/orderContext";
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
import PaymentErrorMessage from "../../components/payments/PaymentErrorMessage";
import PaymentSuccessMessage from "../../components/payments/PaymentSuccessMessage";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const stripe = useStripe()
    const elements = useElements()

    const basketContext = useContext(BasketContext);
    const {basket, deleteBasket} = basketContext;

    const orderContext = useContext(OrderContext);
    const {postOrder} = orderContext;


    const resetErrorMessage = () => {
        setErrorMessage(null);
    }

    if (errorMessage) return <PaymentErrorMessage resetErrorMessage={resetErrorMessage} message={errorMessage}/>

    if (successMessage) return <PaymentSuccessMessage message={successMessage}/>

    const onSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement);

        if (card == null) {
            return;
        }

        setLoading(true);

        try {
            await postOrder(basket.id);

            console.log('basket', basket);

            const {paymentIntent} = await stripe.confirmCardPayment(
                basket.clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: name
                        },
                    },
                },
            );

            if (paymentIntent) {
                setSuccessMessage('Payment Success!');
                deleteBasket(basket.id);
            }

        } catch (error) {
            console.error('[error]: ', error);
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Grid container>
            <Grid item xs={12} lg={6} className="p-2">
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
                <pre>
                    Card number for testing: <strong>4242 4242 4242 4242</strong>
                </pre>
            </Grid>
            <Grid item xs={12} lg={6} className="p-2">
                <OrderTotals/>
                {
                    !loading ? (
                        <Button color="secondary"
                                variant="contained"
                                type="submit"
                                className="w-100 mt-2"
                                onClick={() => onSubmit()}
                                disabled={!stripe}>
                            Finalize Payment
                        </Button>
                    ) : (
                        <span className="mt-2 all-center">
                            <CircularProgress color="secondary"/>
                    </span>
                    )
                }
            </Grid>
        </Grid>
    )
}
