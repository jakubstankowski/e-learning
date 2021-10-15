import React, {useContext, useEffect} from "react";
import OrderContext from "../../context/order/orderContext";

export default function Order() {
    const orderContext = useContext(OrderContext);
    const {order, getOrderByUser} = orderContext;

    useEffect(() => {
        getOrderByUser();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            order
        </>
    )
}
