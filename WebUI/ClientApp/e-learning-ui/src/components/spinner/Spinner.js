import React, {Fragment} from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";


export default function Spinner(props) {
    const {size} = props;

    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <CircularProgress color="secondary"
                              size={size}/>
        </div>
    )
}

