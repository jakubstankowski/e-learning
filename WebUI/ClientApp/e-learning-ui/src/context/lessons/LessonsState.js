import React, {useReducer} from 'react';
import axios from 'axios';
import LessonsContext from './lessonsContext';
import LessonsReducer from './lessonsReducer';

import {
    GET_LESSON,
    DELETE_LESSON,
    POST_LESSON,
    UPDATE_LESSON,
    SET_LOADING,
    LESSON_ERROR
} from '../types'
import errorParser from "../../utils/helpers/errorParser";


function LessonsState(props) {
    const initialState = {
        lessons: [],
        lesson: {},
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(LessonsReducer, initialState);

    const getLesson = async (id) => {
        try {
            setLoading();

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/lesson/${id}`);

            dispatch({
                type: GET_LESSON,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: LESSON_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }

    const postLesson = async (lesson) => {
        try {
            setLoading();

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/lesson`, lesson);

            dispatch({
                type: POST_LESSON,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: LESSON_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }


    const deleteLesson = async (id) => {
        try {
            setLoading();

            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/lesson/${id}`)

            dispatch({
                type: DELETE_LESSON,
                payload: res.data
            });

        } catch (error) {
            dispatch({
                type: LESSON_ERROR,
                payload: errorParser.parse(error)
            });
        }

    }

    const updateLesson = async (id, lesson) => {
        try {
            setLoading();

            const res = await axios.put(`${process.env.REACT_APP_API_URL}/lesson/${id}`, lesson)

            dispatch({
                type: UPDATE_LESSON,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: LESSON_ERROR,
                payload: errorParser.parse(error)
            });
        }
    }


    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <LessonsContext.Provider
            value={{
                lesson: state.lesson,
                error: state.error,
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
