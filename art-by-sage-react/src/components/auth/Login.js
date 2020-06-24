import React, { useContext } from "react";
import Cookies from "js-cookie";

import AuthApi from "./AuthApi";

export default function Login() {
    const Auth = useContext(AuthApi);

    const handleOnClick = () => {
        Auth.setIsAuthenticated(true);
        Cookies.set("user", "loginTrue", { expires: 5 });
    };

    return (
        <div>
            <button onClick={handleOnClick}>Login</button>
        </div>
    );
}
