import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavigationContainer from "./components/NavigationContainer";
import Home from "./pages/Home";
import About from './pages/About';
import Gallery from "./pages/Gallery";
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Commissions from './pages/Commissions';

import "./styles/Main.scss";

function App() {
    return (
        <Router>
            <NavigationContainer />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/commissions" component={Commissions} />
            </Switch>
        </Router>
    );
}

export default App;
