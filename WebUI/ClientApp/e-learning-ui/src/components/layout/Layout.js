import React, {useEffect, useContext} from "react";
import BasketContext from "../../context/basket/basketContext";
import {Container} from "@material-ui/core";

export default function Layout({children}) {
    const basketContext = useContext(BasketContext);
    const {getBasket} = basketContext;

    useEffect(() => {
        const basketId = localStorage.getItem('basket_id');

        if (basketId) {
            getBasket(basketId);
        }

        // eslint-disable-next-line
    }, []);

    return (
        <Container maxWidth="lg"
                   className="container">
            {children}
        </Container>
    )

}
