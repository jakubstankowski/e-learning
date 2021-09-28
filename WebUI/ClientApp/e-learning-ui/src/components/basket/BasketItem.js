import React, {useContext} from "react";
import BasketContext from "../../context/basket/basketContext";

export default function BasketItem(props) {
    const {id, title, price} = props.basket;

    const basketContext = useContext(BasketContext);

    const {removeItemFromBasket} = basketContext;

    return (
        <ul>
            <li>
                id: {id}
            </li>
            <li>
                title: {title}
            </li>
            <li>
                price: {price} $
            </li>
            <button onClick={() => removeItemFromBasket(props.basket)}>
                remove item
            </button>
        </ul>
    )
}
