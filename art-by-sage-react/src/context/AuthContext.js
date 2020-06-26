import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        console.log(isAuthenticated);
    }, []);

    return (
        <div>
            <AuthContext.Provider
                value={{
                    user,
                    setUser,
                    isAuthenticated,
                    setIsAuthenticated,
                }}
            >
                {children}
            </AuthContext.Provider>
        </div>
    );
};
