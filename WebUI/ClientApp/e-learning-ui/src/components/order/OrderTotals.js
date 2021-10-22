import React, {useContext} from "react";
import BasketContext from "../../context/basket/basketContext";
import Typography from "@material-ui/core/Typography";


export default function OrderTotals() {
    const basketContext = useContext(BasketContext);
    const {basket} = basketContext;

    return (
        <Typography variant="h4" component="h4">
            Total order: {basket.subTotal} $
        </Typography>
    )
}
