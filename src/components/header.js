import React, { Component } from "react";
import Card from "./veiculos_list";

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
                                <a className="nav-link">Classificados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Oficinas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Veículos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">user</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
