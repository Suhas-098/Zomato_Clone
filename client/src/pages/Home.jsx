import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div>Home</div>
            <div className="auth-switch">
                User?
                <Link to="/user/login" className="auth-link">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Home;