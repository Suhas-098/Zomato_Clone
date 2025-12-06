import React, { useState, useEffect } from 'react'
import '../styles/Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RestaurantPartnerLogin() {

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         navigate('/add-food-items');
    //     } else {
    //         navigate('/restaurantPartner/login');
    //     }
    // },);


    const [formData, setFormData] = useState({
        workEmail: '',
        workPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        axios.post(`http://localhost:3000/api/auth/restaurantPartner/login`, formData, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate('/add-food-items');  // Only navigate when login SUCCESS
            })
            .catch((error) => {
                console.log(error.response?.data || error);
                alert(error.response?.data?.message || "Login failed");
            });
    };


    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Restaurant Partner Login</h2>
                <form onSubmit={handleSubmit}>

                    <>
                        <div className="form-group">
                            <label className="form-label">Work Email</label>
                            <input
                                type="email"
                                name="workEmail"
                                className="form-input"
                                placeholder="Enter your work email"
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
                                placeholder="Enter your password"
                                value={formData.workPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <div className="auth-switch">
                    Don't have an account?
                    <Link to="/restaurantPartner/register" className="auth-link">
                        Register
                    </Link>
                </div>
                <div className="auth-switch">
                    User?
                    <Link to="/user/login" className="auth-link">
                        Login
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default RestaurantPartnerLogin;