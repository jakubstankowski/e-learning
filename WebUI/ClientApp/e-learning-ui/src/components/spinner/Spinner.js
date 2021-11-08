import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";


export default function Spinner(props) {
    const {size} = props;

    return (
        <div className="all-center">
            <CircularProgress color="secondary"
                              size={size}/>
        </div>
    )
}

