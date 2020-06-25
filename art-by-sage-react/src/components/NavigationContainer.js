import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../context/AuthContext";

const NavigationContainer = (props) => {
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
                <div>
                    <NavLink to="/shop">Shop</NavLink>
                </div>
                <div>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
            <div className="nav-right">
                <div className="action-button">
                    <NavLink to="/commissions">Commission Me</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavigationContainer;
