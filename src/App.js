import React, { Component } from "react";
import Header from "./components/header";
import CadastroVeiculo from "./containers/CadastroVeiculo";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <CadastroVeiculo />
            </div>
        );
    }
}
export default App;
