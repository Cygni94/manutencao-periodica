import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from "react-router-dom";

const Navbar = props => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#">
                    Navbar
                </a>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/veiculos">
                                <a className="nav-link">Veículos</a>
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
