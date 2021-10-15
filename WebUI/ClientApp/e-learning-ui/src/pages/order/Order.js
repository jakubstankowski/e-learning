import React, {useContext, useEffect} from "react";
import OrderContext from "../../context/order/orderContext";
import {navigate} from "@reach/router";

export default function Order() {
    const orderContext = useContext(OrderContext);
    const {order, getOrderByUser} = orderContext;

    useEffect(() => {
        getOrderByUser()
            .then((r) => {
                console.log('re: ', r);
            })
        // eslint-disable-next-line
    }, []);

    return (
        <>
            order
        </>
    )
}
