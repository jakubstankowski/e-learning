import React from "react";


export default function OrderTotals(props) {
    const {total} = props;
    return (
        <>
            total order: {total}
        </>
    )
}
