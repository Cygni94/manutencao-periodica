import React from "react";
import VeiculoItem from "../components/veiculos_item";

const VeiculosList = props => {
    const veiculoItem = props.veiculos.map(veiculo => {
        return <VeiculoItem key={veiculo.id} veiculo={veiculo} />;
    });
    return (
        <div className="container">
            <div className="row">{veiculoItem}</div>
        </div>
    );
};

export default VeiculosList;