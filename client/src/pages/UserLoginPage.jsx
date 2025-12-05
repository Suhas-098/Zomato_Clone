import React, { useState } from 'react'
import '../components/Auth/Auth.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        axios.post(`http://localhost:3000/api/auth/user/login`, formData, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        navigate("/");
    };

    return (

        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">User Login</h2>
                <form onSubmit={handleSubmit}>


                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">Login</button>
                </form>
                <div className="auth-switch">
                    Don't have an account?
                    <Link to="/user/register" className="auth-link">
                        Register
                    </Link>
                </div>
                <div className="auth-switch">
                    Food Partner?
                    <Link to="/restaurantpartner/login" className="auth-link">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserLoginPage;