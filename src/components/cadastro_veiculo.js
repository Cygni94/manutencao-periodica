import React from "react";

const CadastroVeiculos = props => {
    const fabricanteOption = props.veiculos.map(veiculo => {
        return <option key={veiculo.id}>{veiculo.fabricante}</option>;
    });

    //    function conditionalOption(option) {
    //    const modeloOption = props.veiculos.map(veiculo => {
    //        if (veiculo.id == 1) {
    //  return <option key={veiculo.id}>{veiculo.modelo}</option>;
    //        }
    //});
    //    }

    return (
        <form>
            <div className="col-md-4">
                <label>Fabricante</label>
                <input id="fabricante" />
            </div>
            <div className="col-md-4">
                <label>Modelo</label>
                <input id="fabricante" />
            </div>
            <br />
            <button className="btn btn-primary" type="submit">
                Cadastrar
            </button>
        </form>
    );
};

export default CadastroVeiculos;
