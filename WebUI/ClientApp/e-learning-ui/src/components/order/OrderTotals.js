import React, {useContext} from "react";
import BasketContext from "../../context/basket/basketContext";


export default function OrderTotals() {
    const basketContext = useContext(BasketContext);
    const {basket} = basketContext;

    return (
        <h4>
            total order: {basket.subTotal}
        </h4>
    )
}
