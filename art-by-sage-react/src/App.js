import React, { useContext } from "react";
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

import PrivateRoute from './components/auth/PrivateRoute';
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
import { AuthContext } from "./context/AuthContext";

library.add(faExclamationTriangle, faCircleNotch);

function App(props) {
    const {
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
    } = useContext(AuthContext);

    return (
        <Router>
            <div className="App">
                <NavigationContainer />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/gallery"
                        component={Gallery}
                    />
                    {/* <Route exact path="/shop" component={Shop} /> */}
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
                    <Route exact path="/login" component={Login} />

                    <PrivateRoute
                        exact
                        path="/galleryEditor"
                        component={GalleryEditor}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
