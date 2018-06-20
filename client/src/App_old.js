import React, { Component } from "react";
import VeiculoInfo from "./components/card";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

const Motos = {
  Factor: {
    propriedades: {
      fotoURL: 'assets/img/factor.jpg',
      fabricante:  'Yamaha',
      modelo: 'Factor 125i ED'
    }
  },
  Fazer: {
    propriedades: {
    fotoURL: 'https://www.yamaha-motor.com.br/fazer250abs/assets/img/comparativo/fazer.png',
    fabricante:  'Yamaha',
    modelo: 'Fazer 250 ABS'
  }
}
}

class App extends Component {

	_renderObject(){
		return Object.entries(Motos).map(([key, value], i) => {
			return (
				<div key={key}>
        <div className="card">
					Modelo: {value.propriedades.modelo}
          Fabricante: {value.propriedades.fabricante}
          </div>
				</div>
			)
		})
	}

 render() {
    return (
      <div className="App">
        {this._renderObject()}
      </div>
    );
  }
}

export default App;
