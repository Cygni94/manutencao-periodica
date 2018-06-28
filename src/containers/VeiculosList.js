import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVeiculos } from "../actions/index";
import VeiculoItem from "../components/veiculos_item";

class VeiculosList extends Component {
    componentWillMount() {
        this.props.fetchVeiculos();
    }

    renderVeiculos() {
        return _.map(this.props.veiculos, veiculos => {
            return <VeiculoItem key={veiculos.id} veiculos={veiculos} />;
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">{this.renderVeiculos()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { veiculos: state.veiculos };
}

export default connect(
    mapStateToProps,
    { fetchVeiculos }
)(VeiculosList);
