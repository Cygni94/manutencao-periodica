import React, { Component } from "react";
import Header from "./components/header";
import CadastroVeiculo from "./containers/CadastroVeiculo";
import "./App.css";
import VeiculosList from "./containers/VeiculosList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <VeiculosList />
            </div>
        );
    }
}
export default App;
