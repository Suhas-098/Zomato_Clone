import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AddedFoodItemsDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const hasToken = document.cookie.split("; ").some(row => row.startsWith("token="));
        if (!hasToken) navigate("/restaurantPartner/login");
    }, []);

    return (
        <div>
            <h1>Added Food Items Dashboard</h1>
        </div>
    )
}

export default AddedFoodItemsDashboard;