import React from "react";

export default function BasketItem(props) {
    const {id, title, price} = props.basket;

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
        </ul>
    )
}
