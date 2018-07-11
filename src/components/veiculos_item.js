import React from "react";

const VeiculoItem = ({ veiculos }) => {
    const key = veiculos.id;
    const fotoURL = veiculos.fotoURL;
    const modelo = veiculos.modelo;

    return (
        <div className="col-md-3 card">
            <div className="card__header">
                <figure className="photo">
                    <img
                        className="img-fluid photo__img"
                        src="../../../public/assets/img/moto.svg"
                        alt="Imagem do veículo"
                    />
                </figure>
            </div>
            <div className="card__body">
                <h2>{modelo}</h2>
                <div className="row">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Active</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VeiculoItem;
