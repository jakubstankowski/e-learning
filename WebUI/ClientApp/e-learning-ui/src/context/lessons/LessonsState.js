import React, {useReducer} from 'react';
import axios from 'axios';
import LessonsContext from './lessonsContext';
import LessonsReducer from './lessonsReducer';

import {
    GET_COURSE_LESSONS,
    GET_LESSON,
    DELETE_LESSON,
    POST_LESSON,
    UPDATE_LESSON,
    SET_LOADING
} from '../types'


function LessonsState(props) {
    const initialState = {
        lessons: [],
        lesson: {},
        loading: false
    }

    const [state, dispatch] = useReducer(LessonsReducer, initialState);

    const getCourseLessons = async (courseId) => {
        setLoading();

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${courseId}/lessons`);

        dispatch({
            type: GET_COURSE_LESSONS,
            payload: res.data
        })
    }

    const getLesson = async (id) => {
        setLoading();

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/lesson/${id}`);

        dispatch({
            type: GET_LESSON,
            payload: res.data
        })
    }

    const postLesson = async (lesson) => {
        setLoading();

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/lesson`, lesson);

        dispatch({
            type: POST_LESSON,
            payload: res.data
        })
    }


    const deleteLesson = async (id) => {
        setLoading();

        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/lesson/${id}`)

        dispatch({
            type: DELETE_LESSON,
            payload: res.data
        })
    }

    const updateLesson = async (id, lesson) => {
        setLoading();

        const res = await axios.put(`${process.env.REACT_APP_API_URL}/lesson/${id}`, lesson)

        dispatch({
            type: UPDATE_LESSON,
            payload: res.data
        })
    }


    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <LessonsContext.Provider
            value={{
                lesson: state.lesson,
                lessons: state.lessons,
                getCourseLessons,
                getLesson,
                postLesson,
                deleteLesson,
                updateLesson
            }}
        >
            {props.children}
        </LessonsContext.Provider>
    );

}

export default LessonsState;
