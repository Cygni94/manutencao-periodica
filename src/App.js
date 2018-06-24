import React, { Component } from "react";
import Header from "./components/header";
import CadastroVeiculo from "./components/cadastro_veiculo";
import VeiculosList from "./components/veiculos_list";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { veiculos: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value =
            target.type === "radio"
                ? (this.setState.tipo = target.value)
                : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:3666/data`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tipo: this.state.tipo,
                fabricante: this.state.fabricante,
                modelo: this.state.modelo,
                fotoURL: this.state.fotoURL,
            }),
        });
        this.setState({
            tipo: "",
            fabricante: "",
            modelo: "",
            fotoURL: "",
        });
    }

    componentDidMount() {
        fetch(`http://localhost:3666/data`)
            .then(result => result.json())
            .then(veiculos => this.setState({ veiculos }));
    }

    render() {
        return (
            <div className="container">
                <Header />
                <CadastroVeiculo veiculos={this.state.veiculos} />
                <VeiculosList veiculos={this.state.veiculos} />
            </div>
        );
    }
}
export default App;
