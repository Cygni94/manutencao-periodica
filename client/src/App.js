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
                <Card veiculo={this.state.veiculos} />
            </div>
        );
    }
}

export default App;
