import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from "react-router-dom";
import Header from "./components/header";
import Card from "./components/card";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { veiculos: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:3666/veiculos`)
            .then(result => result.json())
            .then(veiculos => this.setState({ veiculos }));
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Card veiculos={this.state.veiculos} />
                    <Switch>
                        <Route path="/veiculos" component={Card} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
