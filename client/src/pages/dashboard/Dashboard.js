import './Dashboard.css';
import axios from 'axios';
import Navigation from '../../components/Navigation'
import { useEffect } from 'react';
export default function Dashboard() {
    const userId = localStorage.getItem('userId');
    const getUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3002/api/user/${userId}`);
            if(response){
                console.log("🚀 ~ getUserDetails ~ response:", response)
                
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUserDetails();
    }, []);
    return (
        <>
            <Navigation />
            <div>Dashboard</div>
        </>
    )
};