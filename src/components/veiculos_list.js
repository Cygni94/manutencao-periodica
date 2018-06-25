import React from "react";
import CadastroVeiculos from "./cadastro_veiculo";
import VeiculoItem from "./veiculos_item";

const VeiculosList = props => {
    console.log(props);
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
