import React, {useContext} from 'react';
import {Redirect} from '@reach/router';
import AuthContext from '../../context/auth/authContext';

export const protectedComponent = Component => props => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext;

    if (!isAuthenticated) return <Redirect noThrow to='/login'/>;
    return <Component {...props} />
};
