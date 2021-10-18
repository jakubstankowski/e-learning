import React from "react";


export default function OrderTotals(props) {
    const {total} = props;
    return (
        <h4>
            total order: {total}
        </h4>
    )
}
