import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {

    const authContext = useContext(AuthContext);
    const { token } = authContext;

    return (
        <Route {...rest} render={props => token === null ? (
            <Redirect to='/login' />
        ) : (
            <Component {...props} />
        )} />
    );
};
