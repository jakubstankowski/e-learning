import React, {useReducer} from 'react';
import axios from 'axios';
import CoursesContext from './coursesContext';
import CoursesReducer from './coursesReducer';

import {
    GET_COURSE,
    GET_COURSES,
    DELETE_COURSE,
    POST_LESSON,
    UPDATE_COURSE
} from '../types'


function CoursesState(props) {
    const initialState = {
        courses: [],
        course: {}
    }

    const [state, dispatch] = useReducer(CoursesReducer, initialState);

    const getCourses = async () => {
        const res = await axios.get('https://localhost:44367/api/courses');

        dispatch({
            type: GET_COURSES,
            payload: res.data
        })

    }


    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                course: state.course,
                getCourses
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );

}

export default CoursesState;
