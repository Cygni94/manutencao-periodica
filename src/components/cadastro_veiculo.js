import React, { Component } from "react";

class CadastroVeiculos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tipo: "",
            fabricante: null,
            modelo: "",
            fotoURL: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "radio" ? target.checked : target.value;
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit()}>
                <fieldset>
                    <legend>Selecione o tipo de veículo:</legend>
                    <label>
                        <input
                            name="carro"
                            type="radio"
                            value="Carro"
                            checked={this.state.tipo === "Carro"}
                            onChange={this.handleChange}
                        />{" "}
                        Carro
                    </label>
                    <br />
                    <label>
                        <input
                            name="moto"
                            type="radio"
                            value="Moto"
                            checked={this.state.tipo === "Moto"}
                            onChange={this.handleChange}
                        />{" "}
                        Moto
                    </label>
                    <br />
                    <label>
                        Fabricante:
                        <input
                            type="text"
                            value={this.state.fabricante}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Modelo:
                        <input
                            type="text"
                            value={this.state.modelo}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Caminho da foto:
                        <input
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
        );
    }
}

export default CadastroVeiculos;
