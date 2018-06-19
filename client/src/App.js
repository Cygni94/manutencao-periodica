import React, { Component } from "react";
import VeiculoInfo from "./components/veiculo_info";
import "./App.css";

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
					Modelo: {value.propriedades.modelo}
					Fabricante: {value.propriedades.fabricante}
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
