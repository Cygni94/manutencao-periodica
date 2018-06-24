import React, { Component } from "react";

const CadastroVeiculos = ({ veiculos }) => {
    return (
        <form onSubmit={veiculos.handleSubmit}>
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
                        value={veiculos.fabricante}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Modelo:
                    <input
                        name="modelo"
                        type="text"
                        value={veiculos.modelo}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Caminho da foto:
                    <input
                        name="fotoURL"
                        type="text"
                        value={veiculos.fotoURL}
                        onChange={this.handleChange}
                    />
                </label>
            </fieldset>
            <button type="submit" className="submit-button">
                Cadastrar
            </button>
        </form>
    );
};

export default CadastroVeiculos;
