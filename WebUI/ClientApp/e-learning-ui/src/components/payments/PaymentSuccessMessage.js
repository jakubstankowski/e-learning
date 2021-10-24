import Box from "@material-ui/core/Box";
import {Cancel, CheckCircle} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";


export default function PaymentSuccessMessage(props){
    const {message} = props;

    return (
        <Box sx={{width: '100%', maxWidth: 500}} style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        }}>
            <CheckCircle style={{fontSize: 100}}
                    variant="outlined"
                    color="error"/>
            <Typography variant="title" gutterBottom component="div">
                {message}
            </Typography>
        </Box>
    )
}
