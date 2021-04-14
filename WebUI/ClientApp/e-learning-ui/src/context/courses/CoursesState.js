import React, {useReducer} from 'react';
import axios from 'axios';
import CoursesContext from './coursesContext';
import CoursesReducer from './coursesReducer';

import {
    GET_COURSE,
    GET_COURSES,
    DELETE_COURSE,
    UPDATE_COURSE
} from '../types'


function CoursesState(props) {
    const initialState = {
        courses: [],
        course: []
    }

    const [state, dispatch] = useReducer(CoursesReducer, initialState);

    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                course: state.course
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );

}

export default CoursesState;
