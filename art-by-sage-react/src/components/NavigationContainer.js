import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../context/AuthContext";

const NavigationContainer = (props) => {
    const {
        isAuthenticated,
        setIsAuthenticated,
        setUser,
    } = useContext(AuthContext);

    const onLogoutClick = () => {
        AuthService.logout().then((data) => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    };
    return (
        <div className="navigation-container">
            <div className="nav-left">
                <h1>Sage Kozub</h1>
            </div>
            <div className="nav-center">
                <div>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/gallery">Gallery</NavLink>
                </div>
                {/* <div>
                    <NavLink to="/shop">Shop</NavLink>
                </div> */}
                <div>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                {isAuthenticated ? (
                    <div>
                        <NavLink to="/galleryeditor">
                            Gallery Editor
                        </NavLink>
                    </div>
                ) : null}
            </div>
            <div className="nav-right">
                <div className="action-button">
                    <NavLink to="/commissions">Commission Me</NavLink>
                </div>
                <div>
                    {isAuthenticated ? (
                        <button onClick={onLogoutClick()}>
                            Logout
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default NavigationContainer;
