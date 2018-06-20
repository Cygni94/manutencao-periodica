import React, { Component } from "react";
import Card from "./components/card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Motos = {
    Factor: {
        fotoURL: "assets/img/factor.jpg",
        fabricante: "Yamaha",
        modelo: "Factor 125i ED",
    },
    Fazer: {
        fotoURL:
            "https://www.yamaha-motor.com.br/fazer250abs/assets/img/comparativo/fazer.png",
        fabricante: "Yamaha",
        modelo: "Fazer 250 ABS",
    },
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    _renderObject() {
        return Object.entries(Motos).map(([key, props], i) => {
            return <Card />;
        });
    }

    render() {
        return <div className="App">{this._renderObject()}</div>;
    }
}

export default App;
