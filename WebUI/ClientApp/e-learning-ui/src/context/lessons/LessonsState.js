import React, {useReducer} from 'react';
import axios from 'axios';
import LessonsContext from './lessonsContext';
import LessonsReducer from './lessonsReducer';

import {
    GET_LESSON,
    DELETE_LESSON,
    POST_LESSON,
    UPDATE_LESSON
} from '../types'


function LessonsState(props) {
    const initialState = {
        lesson: {}
    }

    const [state, dispatch] = useReducer(LessonsReducer, initialState);

    return (
        <LessonsContext.Provider
            value={{
                lesson: state.lesson
            }}
        >
            {props.children}
        </LessonsContext.Provider>
    );

}

export default LessonsState;
