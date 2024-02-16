import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
    return (
        <Router>
            <nav className="shadow-sm navbar sticky-top navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Your App Name</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            {/* Add more navigation links as needed */}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/">
                    {/* Home component */}
                </Route>
                <Route path="/about">
                    {/* About component */}
                </Route>
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}
