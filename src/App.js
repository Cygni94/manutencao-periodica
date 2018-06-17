import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Manutenção periódica</h1>
                <h2>
                  veja o arquivo structure.txt para consultar o{" "}
                  <a href="../../structure.txt">backlog</a> deste app
                </h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
