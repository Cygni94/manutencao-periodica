import React, { Component } from "react";
import $ from "jquery";
// import Card from "./components/card";
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
        $.getJSON("localhost:3666/moto").then(({ results }) =>
            this.setState({ veiculos: results.json() })
        );
    } V@dT#RYQE5y&

    render() {
        const veiculos = this.state.veiculos.map((item, i) => (
            <div>
                <h1>{item.data.attributes.modelo}</h1>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{veiculos}</div>
            </div>
        );
    }
}
export default App;
