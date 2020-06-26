import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const { setIsAuthenticated } = useContext(
        AuthContext
    );

    const onChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((isTrue) => {
                {
                    setIsAuthenticated(isTrue);
                }
            });
        {
            props.history.push("/galleryeditor");
        }
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
