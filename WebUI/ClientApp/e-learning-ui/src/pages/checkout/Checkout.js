import React, {useContext} from "react";
import BasketContext from "../../context/basket/basketContext";
import OrderContext from "../../context/order/orderContext";
import PaymentsContext from "../../context/payments/paymentsContext";
import Button from "@material-ui/core/Button";
import {Form} from "react-final-form";
import {TextField} from "mui-rff";
import Grid from "@material-ui/core/Grid";
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';


export default function Checkout() {
    const basketContext = useContext(BasketContext);
    const {basket} = basketContext;

    const orderContext = useContext(OrderContext);
    const {postOrder} = orderContext;

    const paymentContext = useContext(PaymentsContext);
    const {createPaymentIntent} = paymentContext;

    return (
        <>
            <h4>
                total payment: {basket.subTotal}
            </h4>
            <form>
                <PaymentElement/>
                <button>Submit</button>
            </form>
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
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="card-expired"
                                    label="Card Expired"
                                    name="cardExpiry"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="card-cvc"
                                    label="Card CVC"
                                    name="cardCvc"
                                    autoFocus
                                />
                                <Button color="secondary"
                                        type="submit"
                                        onClick={() => createPaymentIntent(basket.id)}
                                        variant="contained">
                                    Submit payment
                                </Button>
                                <Button color="secondary"
                                        type="submit"
                                        onClick={() => postOrder(basket.id)}
                                        variant="contained">
                                    Submit order
                                </Button>
                            </form>
                        )}/>
                </Grid>
            </Grid>
        </>
    )
}
