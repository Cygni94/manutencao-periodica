import React, { Component } from "react";
import VeiculosList from "./veiculos_list";

class CadastroVeiculos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            tipo: "",
            fabricante: "",
            modelo: "",
            fotoURL: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:3666/data`)
            .then(result => result.json())
            .then(veiculos => this.setState({ veiculos }));
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
            id: "",
            tipo: "",
            fabricante: "",
            modelo: "",
            fotoURL: "",
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Selecione o tipo de veículo:</legend>
                        <label>
                            <input
                                name="tipo"
                                type="radio"
                                value="carro"
                                onChange={this.handleChange}
                            />{" "}
                            Carro
                        </label>
                        <br />
                        <label>
                            <input
                                name="tipo"
                                type="radio"
                                value="moto"
                                onChange={this.handleChange}
                            />{" "}
                            Moto
                        </label>
                        <br />
                        <label>
                            Fabricante:
                            <input
                                name="fabricante"
                                type="text"
                                value={this.state.fabricante}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Modelo:
                            <input
                                name="modelo"
                                type="text"
                                value={this.state.modelo}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Caminho da foto:
                            <input
                                name="fotoURL"
                                type="text"
                                value={this.state.fotoURL}
                                onChange={this.handleChange}
                            />
                        </label>
                    </fieldset>
                    <button type="submit" className="submit-button">
                        Cadastrar
                    </button>
                </form>
                <VeiculosList veiculos={this.state.veiculos} />
            </div>
        );
    }
}

export default CadastroVeiculos;
