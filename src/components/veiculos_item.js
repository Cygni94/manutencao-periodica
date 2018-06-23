import React from "react";

const VeiculoItem = ({ veiculo }) => {
    const key = veiculo.id;
    const fotoURL = veiculo.fotoURL;
    const modelo = veiculo.modelo;

    return (
        <div key={key} className="col-md-3 card">
            <div className="card__header">
                <figure className="photo">
                    <img
                        className="img-fluid photo__img"
                        src={fotoURL}
                        alt="Imagem do veículo"
                    />
                </figure>
            </div>
            <div className="card__body">
                <h2>{modelo}</h2>
                <div className="row">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Active
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VeiculoItem;
