import React, { Component } from "react";
import Card from "./components/card";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { veiculos: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:3666/veiculos`)
            .then(result => result.json())
            .then(veiculos => this.setState({ veiculos }));
    }

    render() {
        return (
            <div>
                <Card veiculos={this.state.veiculos} />
            </div>
        );
    }
}
export default App;
