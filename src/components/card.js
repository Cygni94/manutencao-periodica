import React from "react";
import CardItem from "./cardItem";

const Card = props => {
    const cardItem = props.veiculos.map(veiculo => {
        return <CardItem key={veiculo.id} veiculo={veiculo} />;
    });
    return (
        <div className="container">
            <div className="row">{cardItem}</div>
        </div>
    );
};

export default Card;
