import React, { useState, useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faExclamationTriangle,
    faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import Cookies from "js-cookie";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProtectedLogin from "./components/auth/ProtectedLogin";
import AuthApi from "./components/auth/AuthApi";
import NavigationContainer from "./components/NavigationContainer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Commissions from "./pages/Commissions";
import Login from "./components/auth/Login";
import GalleryEditor from "./pages/GalleryEditor";

import "./styles/Main.scss";
import "react-square-payment-form/lib/default.css";

library.add(faExclamationTriangle, faCircleNotch);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const Auth = useContext(AuthApi);
    const readCookie = () => {
        const user = Cookies.get("user");
        if (user) {
            setIsAuthenticated(true);
        }
    };
    useEffect(() => {
        readCookie();
    }, []);

    const handleLogoutClick = () => {
        setIsAuthenticated(false);
        Cookies.remove("user");
    };
    return (
        <AuthApi.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
            }}
        >
            <Router>
                <div className="App">
                    <NavigationContainer />
                    {isAuthenticated ? (
                        <button onClick={handleLogoutClick}>
                            Logout
                        </button>
                    ) : null}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/gallery"
                            component={Gallery}
                        />
                        <Route exact path="/shop" component={Shop} />
                        <Route
                            exact
                            path="/contact"
                            component={Contact}
                        />
                        <Route
                            exact
                            path="/commissions"
                            component={Commissions}
                        />
                        <ProtectedLogin
                            exact
                            path="/login"
                            isAuthenticated={isAuthenticated}
                            component={Login}
                        />
                        <ProtectedRoute
                            exact
                            path="/galleryeditor"
                            isAuthenticated={isAuthenticated}
                            component={GalleryEditor}
                        />
                    </Switch>
                </div>
            </Router>
        </AuthApi.Provider>
    );
}

export default App;
