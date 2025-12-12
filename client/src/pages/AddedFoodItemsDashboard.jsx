import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/UserAuth.css'; // Common vars if needed
import '../styles/PartnerDashboard.css';

function AddedFoodItemsDashboard() {
    const navigate = useNavigate();
    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [partnerName, setPartnerName] = useState("Partner");

    useEffect(() => {
        const hasToken = document.cookie.split("; ").some(row => row.startsWith("token="));
        if (!hasToken) {
            navigate("/restaurantPartner/login");
            return;
        }

        // Get Name from LocalStorage
        const storedPartner = localStorage.getItem("partner");
        if (storedPartner) {
            const p = JSON.parse(storedPartner);
            setPartnerName(p.RestaurantPartnerName || "Partner");
        }


        // TODO: Replace with actual API call to get partner's items
        // For now, simulating data fetch
        setTimeout(() => {
            const mockItems = [
                {
                    id: 1,
                    name: "Butter Chicken",
                    price: 350,
                    category: "Non-Veg",
                    image: null // Placeholder
                },
                {
                    id: 2,
                    name: "Paneer Tikka",
                    price: 280,
                    category: "Veg",
                    image: null
                },
                {
                    id: 3,
                    name: "Chocolate Shake",
                    price: 150,
                    category: "Beverages",
                    image: null
                }
            ];
            setFoodItems(mockItems);
            setLoading(false);
        }, 1000);

    }, [navigate]);

    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem("token");
        localStorage.removeItem("partner");
        navigate("/restaurantPartner/login");
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div className="dashboard-nav">
                    <div className="dashboard-brand">FOODIE Partner</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '600' }}>{partnerName}</span>
                        <div className="dashboard-profile-icon" onClick={handleLogout} title="Logout">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        </div>
                    </div>

                </div>
                <div className="dashboard-welcome">
                    <h2>Your Menu</h2>
                    <p>Manage your food items and offerings</p>
                </div>
            </div>

            {/* Content */}
            <div className="dashboard-content">
                <div className="section-header">
                    <span className="section-title">Added Items ({foodItems.length})</span>
                </div>

                {loading ? (
                    <div className="empty-state">Loading...</div>
                ) : (
                    <div className="items-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {foodItems.length > 0 ? (
                            foodItems.map(item => (
                                <div key={item.id} className="food-item-card">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="food-item-image" />
                                    ) : (
                                        <div className="food-item-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ccc' }}>
                                            🍔
                                        </div>
                                    )}

                                    <div className="food-item-details">
                                        <div className="food-item-name">{item.name}</div>
                                        <span className="food-item-category">{item.category}</span>
                                        <div className="food-item-price">₹{item.price}</div>
                                    </div>

                                    <div className="food-item-actions">
                                        <button className="action-btn edit-btn">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        </button>
                                        <button className="action-btn delete-btn">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-state">
                                <p>No food items added yet.</p>
                                <p>Tap the + button to add your first item.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* FAB */}
            <Link to="/add-food-items" className="fab-add-btn">
                <span>+</span>
            </Link>
        </div>
    )
}

export default AddedFoodItemsDashboard;