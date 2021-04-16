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
        alert('get course lessons');
        setLoading();

        const res = await axios.get(`https://localhost:44367/api/courses/${courseId}/lessons`);

        dispatch({
            type: GET_COURSE_LESSONS,
            payload: res.data
        })
    }

    const getLesson = async (id) => {
        setLoading();

        const res = await axios.get(`https://localhost:44367/api/lesson/${id}`);

        dispatch({
            type: GET_LESSON,
            payload: res.data
        })
    }

    const postLesson = async (lesson) => {
        setLoading();

        const res = await axios.post(`https://localhost:44367/api/lesson`, lesson);

        dispatch({
            type: POST_LESSON,
            payload: res.data
        })
    }


    const deleteLesson = async (id) => {
        setLoading();

        const res = await axios.delete(`https://localhost:44367/api/lesson/${id}`)

        dispatch({
            type: DELETE_LESSON,
            payload: res.data
        })
    }

    const updateLesson = async (id, lesson) => {
        setLoading();

        const res = await axios.put(`https://localhost:44367/api/lesson/${id}`, lesson)

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
