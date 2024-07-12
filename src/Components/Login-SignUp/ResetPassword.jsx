import React, {useState} from 'react'
import './ResetPassword.css';
import password_icon from '../Assets/password.png';
import axios from 'axios';
import {useNavigate,useLocation} from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state ? location.state.email : null;

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/User-Data/reset-password', { password });
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

  return (
    <div className="container-reset">
    <div className="full-reset">
        <h1 className="heading-reset">Reset Password</h1>
        <form onSubmit={handleResetPassword}>
            <div className="input-group-reset">
                <img src={password_icon} alt="Email Icon" />
                <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-group-reset">
                <img src={password_icon} alt="Email Icon" />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </form>
        <div className="reset-but">
            <button className="reset-pass" type="submit">Reset Password</button>
        </div>
    </div>
    </div>
  )
}

export default ResetPassword