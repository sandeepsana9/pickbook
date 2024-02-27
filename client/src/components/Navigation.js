import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Navigation.css";

export default function Navigation() {
    const userId = localStorage.getItem('userId');
    const [userDetails, setUserDetails] = useState({
        firstName: null,
        lastName: null,
    });

    const getUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3002/api/user/${userId}`);
            if (response.data) {
                setUserDetails({
                    firstName: response.data.userDetails.firstName,
                    lastName: response.data.userDetails.lastName
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []); // Empty dependency array ensures this effect runs only once, after the initial render

    return (
        <nav className="">
            <div className="d-flex">
                <Link className="heading" to="/dashboard">Pic Book</Link>
                <div className="d-flex">
                    <Link className="sub-heading" to="/dashboard">Dashboard</Link>
                    <Link className="sub-heading" to="/photo">Photo</Link>
                </div>
                <div className='position-absolute right-5 text-transform-capitalize'>{userDetails.firstName} {userDetails.lastName}</div>
            </div>
        </nav>
    );
}
