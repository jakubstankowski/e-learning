import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {navigate} from "@reach/router"

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from '../types';
import errorParser from "../../utils/helpers/errorParser";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        isAdmin: false,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const loadUser = async () => {
        setAuthToken(localStorage.token);

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth`);
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: errorParser.parse(err)
            });
        }
    };

    const register = async form => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, form, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: errorParser.parse(err)
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
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, form, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();

            return res.data;
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: errorParser.parse(err)
            });
        }
    };

    const logout = () => {
        dispatch({
            type: LOGOUT
        });

        return navigate('/')
    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                isAdmin: state.isAdmin,
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
