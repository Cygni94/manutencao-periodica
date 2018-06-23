import React from "react";

const CadastroVeiculos = props => {
    const fabricanteOption = props.veiculos.map(veiculo => {
        return <option key={veiculo.id}>{veiculo.modelo}</option>;
    });

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
                <select>
                    <option value="Selecione o modelo">
                        Selecione o modelo
                    </option>
                    {fabricanteOption}
                </select>
            </div>
            <button className="btn btn-primary" type="submit">
                Cadastrar
            </button>
        </form>
    );
};

export default CadastroVeiculos;
