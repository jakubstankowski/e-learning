import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {ROLES} from "../../constants/roles";

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    USER_IS_ADMIN,
    AUTH_ERROR,
    LOGOUT
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        isAdmin: false,
        userId: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const loadUser = async () => {
        setAuthToken(localStorage.token);

        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });


        } catch (err) {
            dispatch({type: AUTH_ERROR});
        }
    };

    const register = async form => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/auth/register', form, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.title
            });
        }
    };

    const login = async form => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/auth/login', form, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();

            return res.data;
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.title
            });
        }
    };

    const logout = () => dispatch({type: LOGOUT});


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                isAdmin: state.isAdmin,
                userId: state.userId,
                user: state.user,
                error: state.error,
                login,
                register,
                loadUser,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
