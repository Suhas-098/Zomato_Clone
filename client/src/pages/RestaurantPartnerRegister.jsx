import React, { useState } from 'react'
import '../styles/UserAuth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeaderIllustration from '../components/HeaderIllustration'; // Using the SVG component
import { FaUser, FaPhone, FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);


function RestaurantPartnerRegister() {

    const navigate = useNavigate();

    //STATE MANAGEMENT
    const [formData, setFormData] = useState({
        RestaurantPartnerName: '',
        contactName: '',
        phoneNumber: '',
        workEmail: '',
        workPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Partner Register Data:', formData);
        axios.post(`http://localhost:3000/api/auth/restaurantPartner/register`, formData, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate('/restaurantPartner/login');  // Or dashboard
            })
            .catch((error) => {
                console.log(error.response?.data || error);
                alert(error.response?.data?.message || "Registration failed");
            });

    };

    return (
        <div className="auth-page-container">
            <div className="auth-header" style={{ minHeight: '30vh' }}>
                <div className="brand-logo">FOODIE</div>

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
                <h2 className="login-title">Partner Register</h2>
                <form onSubmit={handleSubmit} className="auth-form">

                    <div className="input-group">
                        <input
                            type="text"
                            name="RestaurantPartnerName"
                            className="form-input"
                            placeholder="Restaurant Name"
                            value={formData.RestaurantPartnerName}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><UserIcon /></span>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="contactName"
                            className="form-input"
                            placeholder="Contact Name"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><UserIcon /></span>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="phoneNumber"
                            className="form-input"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><PhoneIcon /></span>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="workEmail"
                            className="form-input"
                            placeholder="Work Email"
                            value={formData.workEmail}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><MailIcon /></span>
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="workPassword"
                            className="form-input"
                            placeholder="Password"
                            value={formData.workPassword}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-icon"><LockIcon /></span>
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>

                    <p className="legal-text">
                        By registering, you agree to Ticketspace's<br />
                        <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                    </p>

                    <div className="social-login">
                        <div className="social-icon social-fb"><FaFacebookF /></div>
                        <div className="social-icon social-google"><FaGoogle /></div>
                        <div className="social-icon social-apple"><FaApple /></div>
                    </div>

                    <div className="auth-bottom-link">
                        Already have an account?
                        <Link to="/restaurantPartner/login">Login</Link>
                    </div>

                    <div className="auth-bottom-link" style={{ marginTop: '10px' }}>
                        User?
                        <Link to="/user/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RestaurantPartnerRegister;