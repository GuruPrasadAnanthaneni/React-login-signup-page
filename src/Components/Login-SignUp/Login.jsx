import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/User-Data/login', { email, password });
            if (response.status === 200) {
                alert("Login successful!");
                navigate('/dashboard');
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    };

    // const handleForgotPassword = (e) => {
    //     e.preventDefault();
    //     alert("Forgot Password functionality not yet implemented.");
    // };

    return (
        <div className="container">
            <div className="full">
                <h1 className="heading">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <img src={email_icon} alt="Email Icon" />
                        <input
                            type="email"
                            placeholder="User Email ID"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <img src={pass_icon} alt="Password Icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login-but">
                        <button className="login" type="submit">Login</button>
                    </div>
                </form>
                <div className="forgot-pass">
                    <a href="/forgot-password" >Forgot Password?</a>
                    <a href="/signup">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
