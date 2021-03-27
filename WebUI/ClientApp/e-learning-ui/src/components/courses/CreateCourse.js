import * as React from "react";
import {Button} from "@material-ui/core";


class CreateCourse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            price: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this state: ', this.state);
    }


    render() {
        return (
            <article className="text-center">
                <h3>
                    Create Course
                </h3>
                <form  className='form'>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='Description'
                    />
                    <input
                        type='number'
                        name='number'
                        placeholder='Number'
                    />
                    <Button variant="contained" color="primary">
                        Add
                    </Button>
                </form>
            </article>
        )
    }

}

export default CreateCourse;
