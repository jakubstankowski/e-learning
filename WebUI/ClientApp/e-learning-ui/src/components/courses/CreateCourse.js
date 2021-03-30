import * as React from "react";
import {Button} from "@material-ui/core";
import PropTypes from 'prop-types';


class CreateCourse extends React.Component {
    state = {
        title: '',
        description: '',
        price: ''
    }

    static propTypes = {
        postCourse: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.postCourse(this.state);
        this.setState({title: '', description: '', price:''});
        this.props.history.push('/');
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
