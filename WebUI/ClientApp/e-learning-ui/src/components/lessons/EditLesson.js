import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Fragment} from "react";
import Lessons from "../lessons/Lessons";
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper} from "@material-ui/core";
import {TextField} from "final-form-material-ui";

class EditLesson extends React.Component {
    componentDidMount() {

    }

    render() {

        return (
            <section className='form-container'>
                EDIT LESSON
            </section>
        )
    }

}


export default EditLesson;
