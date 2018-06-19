import React, { Component } from "react";
import VeiculoInfo from "./components/veiculo_info";
import "./App.css";

const Moto = {
  tipo: 'Moto',
  properties: {
    fotoURL: 'string',
    fabricante:  'string',
    modelo: 'string',
    quilometragem: {type: 'int', default: 0},
  }
}

class App extends Component {

  _renderObject(){
		return Object.entries(ObjectTest)
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
