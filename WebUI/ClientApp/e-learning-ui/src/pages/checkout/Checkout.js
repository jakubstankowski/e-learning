import React, {useContext} from "react";
import BasketContext from "../../context/basket/basketContext";
import OrderContext from "../../context/order/orderContext";
import PaymentsContext from "../../context/payments/paymentsContext";
import Button from "@material-ui/core/Button";
import {Form} from "react-final-form";
import {TextField} from "mui-rff";
import Grid from "@material-ui/core/Grid";
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);


export default function Checkout() {
    const basketContext = useContext(BasketContext);
    const {basket} = basketContext;

    const orderContext = useContext(OrderContext);
    const {postOrder} = orderContext;

    const paymentContext = useContext(PaymentsContext);
    const {createPaymentIntent} = paymentContext;


    const onSubmit = async (values) => {
        console.log('values: ', values);
        await createPaymentIntent(basket.id);
        const stripe = await stripePromise;
        const response = await stripe.confirmCardPayment(basket.clientServer, {
            payment_method: {
                card: values.cardNumber,
                billing_details: {
                    name: values.nameOnCard
                }
            }
        })

        console.log('response', response);
    };

    return (
        <>
            <h4>
                total payment: {basket.subTotal}
            </h4>
            <Grid container spacing={4}>
                <Grid item lg={4} xs={12}>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit, submitting}) => (
                            <form onSubmit={handleSubmit}
                                  className="form">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="name-on-card"
                                    label="Name On Card"
                                    name="nameOnCard"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    type="number"
                                    id="card-number"
                                    label="Curd Number"
                                    name="cardNumber"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="card-expired"
                                    label="Card Expired"
                                    name="cardExpiry"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="card-cvc"
                                    label="Card CVC"
                                    name="cardCvc"
                                />
                                <Button color="secondary"
                                        type="submit"
                                        variant="contained">
                                    Submit payment
                                </Button>
                            </form>
                        )}/>
                </Grid>
            </Grid>
        </>
    )
}
