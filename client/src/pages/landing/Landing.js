import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    const SignUp = () => {
        navigate('/signup');
    }

    return (
        <>
            <button onClick={SignUp}>SignUp</button>
        </>
    )
};
