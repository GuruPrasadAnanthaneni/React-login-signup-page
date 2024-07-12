import React, { useState } from 'react';
import './SignUp.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        // Add your signup logic here
        if (name && email && password) {
            try {
                const response = await axios.post('http://localhost:5500/User-Data/create', {
                    name,
                    email,
                    password
                });
                if (response.status === 200) {
                    alert("Signup successful!");
                    // Redirect to login or another page if needed
                }
            } catch (error) {
                if (error.response) {
                    alert(error.response.data);
                } else {
                    alert("An error occurred. Please try again later.");
                }
            }
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="container-signup">
            <div className="full-signup">
                <h1 className="heading-signup">SignUp</h1>
                <form onSubmit={handleSignup}>
                    <div className="input-group-signup">
                        <img src={user_icon} alt="User Icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group-signup">
                        <img src={email_icon} alt="Email Icon" />
                        <input
                            type="email"
                            placeholder="E-Mail ID"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group-signup">
                        <img src={pass_icon} alt="Password Icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login-but-signup">
                        <button className="login-signup" type="submit">SignUp</button>
                    </div>
                </form>
                <div className="log-signup">
                    <a className="link-log" href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;