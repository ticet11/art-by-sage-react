import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationContainer() {
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
                <div className='action-button' >
                    <NavLink to="/commissions">Commission Me</NavLink>
                </div>
            </div>
        </div>
    );
}
