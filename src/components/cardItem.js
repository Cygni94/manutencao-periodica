import React from "react";

const CardItem = ({ veiculo }) => {
    return (
        <div key={veiculo.id} className="col-md-3 card">
            <div className="card__header">
                <figure className="photo">
                    <img
                        className="img-fluid photo__img"
                        src={veiculo.fotoURL}
                        alt="Imagem do veículo"
                    />
                    {/* <figcaption className="photo__caption">
                        {veiculo.modelo}
                    </figcaption> */}
                </figure>
            </div>
            <div className="card__body">
                <h2>{veiculo.modelo}</h2>
            </div>
            <div className="card__footer">
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

export default CardItem;
