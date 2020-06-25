import React, { useState, useContext } from "react";

import AuthService from "../../Services/AuthService";
// import Message from "../../components/Messages";
import { AuthContext } from "../../context/AuthContext";

const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        AuthService.login(user).then((data) => {
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push("/galleryeditor");
            } else {
                setMessage(message);
            }
        });
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
                    type="text"
                    name="password"
                    onChange={onChange}
                    placeholder="**********"
                />
                <button type="submit">Log In</button>
            </form>
            {/* {message ? <Message message={message} /> : null} */}
        </div>
    );
};

export default Login;
