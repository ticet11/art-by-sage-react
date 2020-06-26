import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const authContext = useContext(AuthContext);

    const onChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user);
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login-container">
            <form onSubmit={onSubmit}>
                <h3>Sign In</h3>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    onChange={onChange}
                    placeholder="user123"
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    placeholder="**********"
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
