import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Authentication.css';

export default function SignUp() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3002/api/authentication/signup', data);
            console.log('Response:', response.data);
            if (response) {
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name<span>*</span></label>
                    <input type="text" id="firstName" name="firstName" {...register("firstName", { required: "You must specify a first name" })} placeholder='Enter First Name' className={`form-control ${errors.firstName ? 'error-border' : ''}`} />
                    {errors.firstName && <span className='error'>{errors.firstName.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name<span>*</span></label>
                    <input type="text" id="lastName" name="lastName" {...register("lastName", { required: "You must specify a last name" })} placeholder='Enter Last Name' className={`form-control ${errors.lastName ? 'error-border' : ''}`} />
                    {errors.lastName && <span className='error'>{errors.lastName.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="text" id="email" name="email" {...register("email", { required: "You must specify a email" })} placeholder='Enter Email' className={`form-control ${errors.email ? 'error-border' : ''}`} />
                    {errors.email && <span className='error'>{errors.email   .message}</span>}
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
                <button type='submit' className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};
