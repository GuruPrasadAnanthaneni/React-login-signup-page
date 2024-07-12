import React, {useState} from 'react'
import axios from 'axios';
import './ForgotPassword.css';
import email_icon from '../Assets/email.png';
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/User-Data/forgot-password', { email });
            if (response.status === 200) {
                alert("Email found!");
                navigate('/reset-password',{state:{email:email}});
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
    <div><div className="container-forgot">
    <div className="full-forgot">
        <h1 className="heading-forgot">Forgot Password</h1>
        <form onSubmit={handleForgotPassword}>
            <div className="input-group-forgot">
                <img src={email_icon} alt="Email Icon" />
                <input
                    type="email"
                    placeholder="User Email ID"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="forgot-but">
            <button className="forgotpass" type="submit">Forgot Password</button>
        </div>
        </form>
       
    </div>
</div></div>
  )
}

export default ForgotPassword