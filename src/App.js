import React, {Component} from 'react';
import Head from './react/head';
import Body from './react/body';
import Info from './react/Info';
import {getRaceInfo} from './Config/RaceDao';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {

    state = {
        race: {}
    };

    componentDidMount() {
        let body = {raceId: this.props.match.params.id};
        getRaceInfo(body, data => {
            console.log('ContentPage', data)
            const {race} = data;
            this.setState({
                race: race
            })

        }, err => {

        })
    }

    render() {
        const {race} = this.state;
        console.log('race',race)
        return (
            <Router>
                <div className="App">
                    <Head/>
                    {/*<Route exact path="/" component={Body}/>*/}
                    <Route path={`${this.props.match.params.url}/travel`} render={props => (
                        <Body race={race} />
                    )}/>
                    {/*<Route path="/mainInfo" render={props => (*/}
                        {/*<Travel-Info race={race}/>*/}
                    {/*)}/>*/}
                    {/*<Route path="/Info" render={props => (*/}
                        {/*<Travel-Info race={race}/>*/}
                    {/*)}/>*/}

                </div>
            </Router>
        );
    }
}

export default App;