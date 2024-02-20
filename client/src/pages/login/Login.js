import React, { useState } from 'react';
import axios from 'axios';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async() => {
        try {
            const response = await axios.post('http://localhost:3002/api/authentication/signup', formData);
            console.log('Response:', response.data);
            if(response){
                navigate('/login')
                toast.success(response.data.message);
            }
        } catch (error) {
           console.log(error);
           toast.error(error.message);
        }

    };

    return (
        
        <div className="container">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleOnChange} placeholder='Enter First Name' className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleOnChange} placeholder='Enter Last Name' className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleOnChange} placeholder='Enter Email' className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={formData.password} onChange={handleOnChange} placeholder='Enter Password' className="form-control" />
            </div>
            <button onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
    );
};
