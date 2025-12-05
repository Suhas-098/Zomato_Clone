import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OrderFoodItems() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if cookie exists
        const hasToken = document.cookie.split("; ").some(row => row.startsWith("token="));
        setIsLoggedIn(hasToken);
    }, []);

    if (!isLoggedIn) {
        return (
            <div>
                <h2>Please login to order food items</h2>
                <Link to="/user/login">Login</Link>
            </div>
        );
    }

    return <div>Welcome User! You can order food items here</div>;
}

export default OrderFoodItems;
