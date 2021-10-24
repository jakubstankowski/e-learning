import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Cancel} from "@material-ui/icons";
import Button from "@material-ui/core/Button";


export default function PaymentErrorMessage(props) {
    const {message, resetErrorMessage} = props;


    return (
        <Box sx={{width: '100%', maxWidth: 500}} style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        }}>
            <Cancel style={{fontSize: 100}}
                    variant="outlined"
                    color="error"/>
            <Typography variant="title" gutterBottom component="div">
                {message}
            </Typography>
            <Button color="secondary"
                    variant="contained"
                    style={{marginTop: '1rem'}}
                    onClick={() => resetErrorMessage()}>
                Try Pay Again
            </Button>
        </Box>
    )
}
