import React, {useReducer} from 'react';
import axios from 'axios';
import LessonsContext from './lessonsContext';
import LessonsReducer from './lessonsReducer';

import {
    GET_COURSE_LESSONS,
    GET_LESSON,
    DELETE_LESSON,
    POST_LESSON,
    UPDATE_LESSON, SET_LOADING, UPDATE_COURSE
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

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <LessonsContext.Provider
            value={{
                lesson: state.lesson,
                lessons: state.lessons,
                getCourseLessons,
                getLesson
            }}
        >
            {props.children}
        </LessonsContext.Provider>
    );

}

export default LessonsState;
