import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedLogin = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() =>
                !isAuthenticated ? <Component /> : <Redirect to="/galleryeditor" />
            }
        />
    );
};

export default ProtectedLogin;