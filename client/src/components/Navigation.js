import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navigation.css"
import Dashboard from '../pages/dashboard/Dashboard';
import User from '../pages/user/User';

export default function Navigation() {
    return (
        <Router>
            <nav className="">
                <div className="d-flex">
                    <Link className="heading" to="/dashboard">Pic Book</Link>
                    <div className="d-flex">
                        <Link className="sub-heading" to="/dashboard">Dashboard</Link>
                        <Link className="sub-heading" to="/user">User</Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/dashboard" element={<Dashboard/>}></Route>
                <Route exact path="/user" element={<User/>}></Route>
            </Routes>
        </Router>
    );
}
