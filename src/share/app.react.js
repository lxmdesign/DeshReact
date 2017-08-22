import React, {Component} from 'react';
import App from '../App';
import {BrowserRouter as Router, Route} from "react-router-dom";


class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/race/:id" component={App}/>

            </Router>

        );
    }
}

export default Routes;
