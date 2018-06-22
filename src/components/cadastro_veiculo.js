import React, { Component } from "react";

class CadastroVeiculo extends Component {
    render() {
        return (
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label>Marca</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value=""
                            required
                        />
                    </div>
                    <select id="fabricantes-dropdown" name="Fabricante" />
                </div>
                <button className="btn btn-primary" type="submit">
                    Cadastrar
                </button>
            </form>
        );
    }
}

export default CadastroVeiculo;
