import React, {useReducer} from 'react';
import axios from 'axios';
import CoursesContext from './coursesContext';
import CoursesReducer from './coursesReducer';

import {
    GET_COURSE,
    GET_COURSES,
    DELETE_COURSE,
    POST_LESSON,
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


        setTimeout(() => {
            dispatch({
                type: GET_COURSES,
                payload: res.data
            })
        }, 2000)


    }


    const getCourse = async (id) => {
        setLoading();

        const res = await axios.get(`https://localhost:44367/api/courses/${id}`);


        dispatch({
            type: GET_COURSE,
            payload: res.data
        })

        /* setCourse({
             id: res.data.id,
             description: res.data.description,
             price: res.data.price,
             title: res.data.title
         })
         setLessons(res.data.lessons);*/
    }


    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <CoursesContext.Provider
            value={{
                courses: state.courses,
                course: state.course,
                getCourses,
                getCourse
            }}
        >
            {props.children}
        </CoursesContext.Provider>
    );

}

export default CoursesState;
