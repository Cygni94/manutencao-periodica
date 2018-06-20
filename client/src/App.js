import React, { Component } from "react";
import $ from "jquery";
import Card from "./components/card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { veiculos: [] };
    }

    componentDidMount() {
        this.VeiculosList();
    }

    VeiculosList() {
        return;
        $.getJSON("localhost:3666/").then(({ results }) =>
            this.setState({ veiculos: results.json() })
        );
    }

    render() {
        return (
            <div>
                <h1>Testando</h1>
                <p>{this.state.veiculos.data}</p>
            </div>
        );
    }
}

export default App;
