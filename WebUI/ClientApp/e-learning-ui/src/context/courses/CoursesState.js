import React, {useReducer} from 'react';
import axios from 'axios';
import CoursesContext from './coursesContext';
import CoursesReducer from './coursesReducer';

import {
    GET_COURSE,
    COURSE_ERROR,
    DELETE_COURSE,
    POST_COURSE,
    UPDATE_COURSE,
    SET_LOADING,
    GET_HOME_COURSES,
    GET_ADMIN_COURSES,
    GET_USER_COURSES, RESET_COURSES
} from '../types'
import errorParser from "../../utils/helpers/errorParser";


function CoursesState(props) {
    const initialState = {
        courses: [],
        course: {},
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(CoursesReducer, initialState);

    const getHomeCourses = async () => {
        try {
            setLoading();

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/courses/home`);
            dispatch({
                type: GET_HOME_COURSES,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const getAdminCourses = async () => {
        try {
            setLoading();

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/courses/admin`);

            dispatch({
                type: GET_ADMIN_COURSES,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const getUserCourses = async () => {
        try {
            setLoading();

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/courses/user`);
            dispatch({
                type: GET_USER_COURSES,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const getCourse = async (id) => {
        try {
            setLoading();

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${id}`);

            dispatch({
                type: GET_COURSE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const postCourse = async (course) => {
        try {
            setLoading();
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/courses`, course)

            dispatch({
                type: POST_COURSE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const deleteCourse = async (id) => {
        try {
            setLoading();

            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/courses/${id}`)

            dispatch({
                type: DELETE_COURSE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const updateCourse = async (id, course) => {
        try {
            setLoading();

            const res = await axios.put(`${process.env.REACT_APP_API_URL}/courses/${id}`, course)

            dispatch({
                type: UPDATE_COURSE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: COURSE_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const resetCourses = () => {
        dispatch({
            type: RESET_COURSES
        });
    }

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                error: state.error,
                course: state.course,
                loading: state.loading,
                getHomeCourses,
                getAdminCourses,
                getUserCourses,
                getCourse,
                postCourse,
                deleteCourse,
                updateCourse,
                resetCourses
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );

}

export default CoursesState;
