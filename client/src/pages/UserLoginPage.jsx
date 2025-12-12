import React, { useState } from 'react'
import '../styles/UserAuth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderIllustration from '../components/HeaderIllustration'; // Using the SVG component
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);


function UserLoginPage() {

    const navigate = useNavigate();

    //STATE MANAGEMENT
    const [formData, setLoginData] = useState({
        email: "",
        password: "",
    });

    //HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setLoginData({ ...formData, [e.target.name]: e.target.value });
    };

    //HANDLE SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/auth/user/login", formData, { withCredentials: true })
            .then((res) => {
                const message = res.data.message;
                if (message === "user logged in successfully") {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Login failed");
            });
    };

    return (
        <div className="auth-page-container">
            {/* Header Section */}
            <div className="auth-header">
                <div className="status-bar-placeholder"></div>
                <div className="brand-logo">FOODIE</div>

                {/* Illustration Area */}
                <div className="auth-illustration-container" style={{ width: '100%', maxWidth: '400px' }}>
                    <HeaderIllustration />
                </div>

                <div className="header-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className="auth-content">
                <h2 className="login-title">Sign In</h2>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><MailIcon /></span>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><LockIcon /></span>
                    </div>

                    <a href="#" className="forgot-password">Forgot your Password?</a>

                    <button type="submit" className="btn btn-primary">Continue</button>

                    <p className="legal-text">
                        By login, you agree to Ticketspace's<br />
                        <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                    </p>

                    <div className="social-login">
                        <div className="social-icon social-fb"><FaFacebookF /></div>
                        <div className="social-icon social-google"><FaGoogle /></div>
                        <div className="social-icon social-apple"><FaApple /></div>
                    </div>

                    <div className="auth-bottom-link">
                        You don't have an account?
                        <Link to="/user/register">Sign Up!</Link>
                    </div>

                    <div className="auth-bottom-link" style={{ marginTop: '10px' }}>
                        Food Partner?
                        <Link to="/restaurantpartner/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserLoginPage;