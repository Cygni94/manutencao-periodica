import React from "react";

const CadastroVeiculos = ({ fabricantes }) => {
    const fabricanteOption = fabricantes.map(fabricante => {
        return <option key={fabricante.id}>{fabricante}</option>;
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
                <select>{fabricanteOption}</select>
            </div>
            <button className="btn btn-primary" type="submit">
                Cadastrar
            </button>
        </form>
    );
};

export default CadastroVeiculos;
