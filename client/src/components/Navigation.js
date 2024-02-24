import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";


export default function Navigation() {
    
    return (
        <nav className="">
            <div className="d-flex">
                <Link className="heading" to="/dashboard">Pic Book</Link>
                <div className="d-flex">
                    <Link className="sub-heading" to="/dashboard">Dashboard</Link>
                    <Link className="sub-heading" to="/user">User</Link>
                </div>
            </div>
        </nav>
    );
}
