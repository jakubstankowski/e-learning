import React, {useReducer} from 'react';
import axios from 'axios';
import CoursesContext from './coursesContext';
import CoursesReducer from './coursesReducer';

import {
    GET_COURSE,
    GET_COURSES,
    DELETE_COURSE,
    POST_COURSE,
    UPDATE_COURSE,
    SET_LOADING
} from '../types'


function CoursesState(props) {
    const initialState = {
        courses: [],
        course: {},
        loading: false
    }

    const [state, dispatch] = useReducer(CoursesReducer, initialState);

    const getCourses = async () => {
        setLoading();

        const res = await axios.get('https://localhost:44367/api/courses');
        dispatch({
                type: GET_COURSES,
                payload: res.data
            })
    }


    const getCourse = async (id) => {
        setLoading();

        const res = await axios.get(`https://localhost:44367/api/courses/${id}`);

        dispatch({
                type: GET_COURSE,
                payload: res.data
            })
    }

    const postCourse = async (course) => {
        setLoading();
        const res = await axios.post('https://localhost:44367/api/courses', course)

        dispatch({
            type: POST_COURSE,
            payload: res.data
        })
    }

    const deleteCourse = async (id) => {
        setLoading();

        const res = await axios.delete(`https://localhost:44367/api/courses/${id}`)

        dispatch({
            type: DELETE_COURSE,
            payload: res.data
        })
    }

    const updateCourse = async (id, course) => {
        setLoading();

        const res = await axios.put(`https://localhost:44367/api/courses/${id}`, course)

        dispatch({
            type: UPDATE_COURSE,
            payload: res.data
        })
    }


    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                course: state.course,
                loading: state.loading,
                getCourses,
                getCourse,
                postCourse,
                deleteCourse,
                updateCourse
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );

}

export default CoursesState;
