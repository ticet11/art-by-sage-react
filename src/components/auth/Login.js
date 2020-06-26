import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const { setIsAuthenticated } = useContext(AuthContext);

    const onChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
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
            })
            .then(() => {
                props.history.push("/galleryeditor");
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="login-form-wrapper form-wrapper">
            <form className='form-container' onSubmit={onSubmit}>
                <h3>Sign In</h3>
                
                <input
                    type="text"
                    name="username"
                    onChange={onChange}
                    placeholder="Username"
                />
            
                <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Passord"
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
