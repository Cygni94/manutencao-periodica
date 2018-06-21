import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from "react-router-dom";
import Loadable from "react-loadable";
import Header from "./components/header";
import Card from "./components/card";
import "./App.css";

const Loading = () => <div>Loading...</div>;

const Veiculos = Loadable({
    loader: () => import("./components/card"),
    loading: Loading,
});

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
                        <Route path="/veiculos" component={Veiculos} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;