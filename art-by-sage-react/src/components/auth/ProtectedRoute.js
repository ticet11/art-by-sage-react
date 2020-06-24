import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() =>
                isAuthenticated ? <Component /> : <Redirect to="/login" />
            }
        />
    );
};

export default ProtectedRoute;
