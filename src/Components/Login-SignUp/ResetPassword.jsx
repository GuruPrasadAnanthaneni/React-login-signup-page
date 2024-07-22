import React, { useState } from 'react';
import './ResetPassword.css';
import password_icon from '../Assets/password.png';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state ? location.state.email : null;

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5500/User-Data/reset-password', { email, password });
            if (response.status === 200) {
                alert("Password reset successful!");
                navigate('/login');
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="container-reset">
            <div className="full-reset">
                <h1 className="heading-reset">Reset Password</h1>
                <form onSubmit={handleResetPassword}>
                    <div className="input-group-reset">
                        <img src={password_icon} alt="Password Icon" />
                        <input
                            type="password"
                            placeholder="New Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group-reset">
                        <img src={password_icon} alt="Password Icon" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="reset-but">
                        <button className="reset-pass" type="submit">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
