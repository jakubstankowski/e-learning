import React, {useReducer} from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';

import {
    GET_USER_COURSES,
    SET_LOADING
} from '../types'


function UserState(props) {
    const initialState = {
        courses: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUserCourses = async () => {
        setLoading();

        const res = await axios.get(`https://localhost:44367/api/user/courses`);

        console.log('res', res);

        dispatch({
            type: GET_USER_COURSES,
            payload: res.data
        })
    }


    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <UserContext.Provider
            value={{
                courses: state.courses,
                getUserCourses
            }}
        >
            {props.children}
        </UserContext.Provider>
    );

}

export default UserState;
