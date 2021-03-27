import * as React from "react";
import {Button} from "@material-ui/core";


class CreateCourse extends React.Component {
    state = {
        title: '',
        description: '',
        price: null
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('this state: ', this.state);

        this.setState({title: '', description: '', price: null});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <article onSubmit={this.onSubmit}>
                <h3>
                    Create Course
                </h3>
                <form className='form'>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.onChange}
                        placeholder='Title'
                    />
                    <input
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.onChange}
                        placeholder='Description'
                    />
                    <input
                        type='number'
                        name='price'
                        value={this.state.price}
                        onChange={this.onChange}
                        placeholder='Price'
                    />
                    <Button type="submit"
                            variant="contained"
                            color="primary">
                        Add
                    </Button>
                </form>
            </article>
        )
    }

}

export default CreateCourse;
