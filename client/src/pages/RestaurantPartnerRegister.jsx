import React, { useState } from 'react'
import '../components/Auth/Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RestaurantPartnerRegister() {

    const navigate = useNavigate();

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
        console.log('Register Data:', formData);
        axios.post(`http://localhost:3000/api/auth/restaurantPartner/register`, formData, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate('/restaurantPartner/login');
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (

        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Partner Register</h2>
                <form onSubmit={handleSubmit}>

                    <>
                        <div className="form-group">
                            <label className="form-label">Restaurant Name</label>
                            <input
                                type="text"
                                name="RestaurantPartnerName"
                                className="form-input"
                                placeholder="Enter restaurant name"
                                value={formData.RestaurantPartnerName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Contact Name</label>
                            <input
                                type="text"
                                name="contactName"
                                className="form-input"
                                placeholder="Enter contact name"
                                value={formData.contactName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                className="form-input"
                                placeholder="Enter phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Work Email</label>
                            <input
                                type="email"
                                name="workEmail"
                                className="form-input"
                                placeholder="Enter work email"
                                value={formData.workEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="workPassword"
                                className="form-input"
                                placeholder="Create a password"
                                value={formData.workPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                    <button type="submit" className="auth-button">Register</button>
                </form>
                <div className="auth-switch">
                    Already have an account?
                    <Link to="/restaurantPartner/login" className="auth-link">
                        Login
                    </Link>
                </div>
                <div className="auth-switch">
                    User?
                    <Link to="/user/register" className="auth-link">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RestaurantPartnerRegister;