import React, { useState } from 'react';
import logo1 from './logo1.png'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '7star' && password === '7star@123') {
            setIsAuthenticated(true);
            toast.success("Login Success", {
                position: toast.POSITION.TOP_RIGHT,
            });
            navigate('/dashboard', { replace: true });

        }
        else {
            toast.error("Username or Password is Wrong!", {
                position: toast.POSITION.TOP_RIGHT,
            });

        }
    }
    return (
        <>
            <ToastContainer />
            <div class="wrapper">
                <div className='logo_login'><img src={logo1} className='logo' /></div>
                <form onSubmit={handleSubmit}>
                    <div class="input-box">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <button type="submit" class="btn">Login</button>
                </form>
            </div>
        </>);
}

export default Login;

