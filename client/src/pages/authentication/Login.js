import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Authentication.css';

export default function Login() {
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3002/api/authentication/login', data);
            if (response) {
                localStorage.setItem("userId", response.data.userId);
                navigate('/dashboard')
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

    };

    return (

        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="text" id="email" name="email" {...register("email", {
                        required: "You must specify a email" ,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format',
                        },
                    })} placeholder='Enter Email' className={`form-control ${errors.email ? 'error-border' : ''}`} />
                    {errors.email && <span className='error'>{errors.email.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password<span>*</span></label>
                    <input type="text" id="password" name="password" {...register("password", {
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "password must have at least 8 characters"
                        }
                    })} placeholder='Enter Password' className={`form-control ${errors.password ? 'error-border' : ''}`} />
                    {errors.password && <span className='error'>{errors.password.message}</span>}
                </div>
                <button type='submit' className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};
