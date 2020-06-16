import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationContainer() {
    return (
        <div className="navigation-container">
            <div className="nav-left">
                <div>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/about">About</NavLink>
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
                <div>
                    <NavLink to="/commissions">Commision Me</NavLink>
                </div>
            </div>
        </div>
    );
}
