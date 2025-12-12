import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/OrderFoodItems.css';


function OrderFoodItems() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('menu'); // 'menu' or 'reels'

    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [reelsData, setReelsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            console.log("Fetching data for restaurant ID:", id); // LOG
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/food/restaurant/${id}`,
                    { withCredentials: true }
                );

                console.log("API Response:", response.data); // LOG

                const { restaurant, foodItems } = response.data;
                setRestaurant(restaurant);

                // Map food items to menu structure
                const formattedMenu = foodItems.map(item => ({
                    id: item._id,
                    name: item.foodName,
                    price: item.foodPrice,
                    discountedPrice: Math.round(item.foodPrice * 0.7), // Mock discount logic
                    description: item.foodDescription,
                    isVeg: item.foodCategory?.toLowerCase() === 'veg', // Assuming category stores 'Veg'/'Non-Veg'
                    rating: 4.0, // Mock rating
                    votes: 100, // Mock votes
                    image: item.foodImage,
                    video: item.foodVideo
                }));
                setMenuItems(formattedMenu);

                // Extract items with videos for reels
                const reels = foodItems
                    .filter(item => item.foodVideo)
                    .map(item => ({
                        id: item._id,
                        videoUrl: item.foodVideo,
                        views: "1K", // Mock views
                        thumbnail: item.foodImage
                    }));
                setReelsData(reels);
                setLoading(false);

            } catch (err) {
                console.error("Error fetching restaurant data:", err);
                setError("Failed to load restaurant details");
                setLoading(false);
                navigate("/user/login");
            }
        };

        if (id && id !== "undefined" && id !== "null") {
            fetchRestaurantData();
        } else {
            console.log("Invalid ID provided in URL:", id);
            setError("No restaurant selected");
            setLoading(false);
        }
    }, [id]);

    if (loading) return <div className="restaurant-page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    if (error) return <div className="restaurant-page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>{error}</div>;
    if (!restaurant) return <div className="restaurant-page-container">Restaurant not found</div>;

    return (
        <div className="restaurant-page-container">
            {/* Header */}
            <div className="restaurant-header">
                <div className="header-top">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="header-actions">
                        <button className="search-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                        <button className="share-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                <circle cx="18" cy="5" r="3" />
                                <circle cx="6" cy="12" r="3" />
                                <circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                        </button>
                        <button className="options-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="restaurant-title-section">
                    <h1 className="restaurant-name">{restaurant.RestaurantPartnerName} <span style={{ fontWeight: 'normal' }}>ⓘ</span></h1>
                    <div className="rating-badge">
                        <span>4.1 ★</span>
                        <span className="rating-count">By 1K+</span>
                    </div>
                </div>

                <div className="restaurant-info">
                    <div className="info-row">
                        <span>📍</span> {restaurant.city || "Mumbai"} • {restaurant.address || "Location"}
                    </div>
                    <div className="delivery-time">
                        <span style={{ fontWeight: 'bold' }}>⏱ 30-35 mins</span>
                    </div>
                </div>

                <div className="reorder-badge">
                    ✓ Frequently reordered
                </div>

                {/* Offers */}
                <div className="offers-section">
                    <div className="offer-card">
                        <div className="offer-text">
                            <span>₹</span> Flat ₹50 OFF above ₹199
                        </div>
                        <div className="offer-count">

                        </div>
                    </div>
                </div>
            </div>

            {/* View Toggle */}
            <div className="view-toggle">
                <button
                    className={`toggle-btn ${activeTab === 'menu' ? 'active' : ''}`}
                    onClick={() => setActiveTab('menu')}
                >
                    {/* Grid Icon */}
                    <svg className="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                </button>
                <button
                    className={`toggle-btn ${activeTab === 'reels' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reels')}
                >
                    {/* Reels/Video Icon */}
                    <svg className="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                        <line x1="7" y1="2" x2="7" y2="22" />
                        <line x1="17" y1="2" x2="17" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <line x1="2" y1="7" x2="7" y2="7" />
                        <line x1="2" y1="17" x2="7" y2="17" />
                        <line x1="17" y1="17" x2="22" y2="17" />
                        <line x1="17" y1="7" x2="22" y2="7" />
                    </svg>
                </button>
            </div>

            {/* Content Area */}
            <div className="content-area">
                {activeTab === 'menu' ? (
                    <div className="menu-section">
                        <div className="menu-header">
                            <h3>FLAT 30% OFF T&C applicable </h3>
                            <span className="coupon-details"></span>
                        </div>

                        {menuItems.map(item => (
                            <div key={item.id} className="menu-item">
                                <div className="food-details">
                                    <div className="veg-icon" style={{ borderColor: item.isVeg ? '#24963f' : '#e23744' }}>
                                        <div className="veg-dot" style={{ backgroundColor: item.isVeg ? '#24963f' : '#e23744' }}></div>
                                    </div>
                                    <h4 className="food-name">{item.name}</h4>
                                    <div className="food-price">
                                        <span className="discounted-price">₹{item.discountedPrice}</span>
                                        <span className="original-price">₹{item.price}</span>
                                    </div>
                                    <span className="discount-tag">30% OFF</span>

                                    <div className="food-rating">
                                        <div className="star-box">
                                            <span className="rating-stars">★★★★★</span>
                                        </div>
                                        <span className="votes-count">{item.votes} votes</span>
                                    </div>
                                    <p className="desc-text">{item.description}</p>
                                </div>

                                <div className="add-btn-container">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="food-image-placeholder" style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div className="food-image-placeholder"></div>
                                    )}
                                    <button className=""></button>
                                    <span className="customizable-text"></span>
                                </div>
                            </div>
                        ))}

                        {menuItems.length === 0 && <div style={{ padding: '20px', textAlign: 'center' }}>No items on the menu yet.</div>}

                        {/* Menu FAB */}
                        <div className="menu-fab">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                            </svg>
                            Menu
                        </div>
                    </div>
                ) : (
                    <div className="reels-grid">
                        {reelsData.map(reel => (
                            <div key={reel.id} className="grid-reel-item">
                                <video
                                    src={reel.videoUrl}
                                    className="grid-video"
                                    muted
                                    loop
                                    onMouseOver={e => e.target.play()}
                                    onMouseOut={e => e.target.pause()}
                                />
                                <div className="play-icon-overlay">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className="grid-reel-info">
                                    <div className="grid-views">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        {reel.views}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {reelsData.length === 0 && <div style={{ gridColumn: '1/-1', padding: '20px', textAlign: 'center', color: 'white' }}>No reels available.</div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderFoodItems;
