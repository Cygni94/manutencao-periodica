import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from "react-router-dom";
import Card from "./card";

class Header extends Component {
    render() {
        return (
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
                                <Link to="/veiculos">
                                    <a className="nav-link">Classificados</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/veiculos">
                                    <a className="nav-link">Oficinas</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/veiculos">
                                    <a className="nav-link">Veículos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/veiculos">
                                    <a className="nav-link">user</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
