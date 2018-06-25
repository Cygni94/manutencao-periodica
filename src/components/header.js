import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import ClassificadosList from "./ClassificadosList";
import OficinasList from "./OficinasList";
import VeiculosList from "./VeiculosList";

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarToggler"
                            aria-controls="navbarToggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a className="navbar-brand" href="#">
                            Manutenção periódica
                        </a>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo03">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link to="/classificados">
                                        <span className="nav-link">
                                            Classificados
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/oficinas">
                                        <span className="nav-link">
                                            Oficinas
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/veiculos">
                                        <span className="nav-link">
                                            Veículos
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/user">
                                        <span className="nav-link">user</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={App} />
                    <Route
                        path="/classificados"
                        component={ClassificadosList}
                    />
                    <Route path="/oficinas" component={OficinasList} />
                    <Route path="/veiculos" component={VeiculosList} />
                </header>
            </Router>
        );
    }
}

export default Header;
