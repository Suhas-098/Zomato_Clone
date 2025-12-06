import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderFoodItems.css';

// Mock Data for UI demonstration
const RESTAURANT_INFO = {
    name: "Desi Tadka Biryani House And Family Restaurant",
    rating: "4.1",
    ratingCount: "10K+",
    location: "Keshwapur",
    distance: "6 km",
    deliveryTime: "30-35 mins",
    isReorder: true
};

const MENU_ITEMS = [
    {
        id: 1,
        name: "Jeera Rice",
        price: 162.50,
        discountedPrice: 81.25,
        description: "Aromatic basmati rice tempered with cumin seeds.",
        rating: 4,
        votes: 124,
        isVeg: true,
        isBestseller: false
    },
    {
        id: 2,
        name: "Butter Kulcha",
        price: 56.25,
        discountedPrice: 28.12,
        description: "Soft and fluffy leavened bread cooked in a tandoor.",
        rating: 4.5,
        votes: 856,
        isVeg: true,
        isBestseller: true
    },
    {
        id: 3,
        name: "Chicken Biryani",
        price: 320.00,
        discountedPrice: 280.00,
        description: "Rich and flavorful biryani with tender chicken pieces.",
        rating: 4.8,
        votes: 2100,
        isVeg: false,
        isBestseller: true
    },
    {
        id: 4,
        name: "Paneer Butter Masala",
        price: 240.00,
        discountedPrice: 210.00,
        description: "Cottage cheese cubes in a rich tomato gravy.",
        rating: 4.2,
        votes: 540,
        isVeg: true,
        isBestseller: false
    }
];

const REELS_DATA = [
    { id: 101, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: "1.2M", thumbnail: "#" },
    { id: 102, videoUrl: "https://www.w3schools.com/html/movie.mp4", views: "850K", thumbnail: "#" },
    { id: 103, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", views: "2.1M", thumbnail: "#" },
    { id: 104, videoUrl: "https://www.w3schools.com/html/movie.mp4", views: "500K", thumbnail: "#" },
];

function OrderFoodItems() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('menu'); // 'menu' or 'reels'

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
                    <h1 className="restaurant-name">{RESTAURANT_INFO.name} <span style={{ fontWeight: 'normal' }}>ⓘ</span></h1>
                    <div className="rating-badge">
                        <span>{RESTAURANT_INFO.rating} ★</span>
                        <span className="rating-count">By {RESTAURANT_INFO.ratingCount}</span>
                    </div>
                </div>

                <div className="restaurant-info">
                    <div className="info-row">
                        <span>📍</span> {RESTAURANT_INFO.distance} • {RESTAURANT_INFO.location}
                    </div>
                    <div className="delivery-time">
                        <span style={{ fontWeight: 'bold' }}>⏱ {RESTAURANT_INFO.deliveryTime}</span> • Schedule for later ⌄
                    </div>
                </div>

                {RESTAURANT_INFO.isReorder && (
                    <div className="reorder-badge">
                        ✓ Frequently reordered
                    </div>
                )}

                {/* Offers */}
                <div className="offers-section">
                    <div className="offer-card">
                        <div className="offer-text">
                            <span>%</span> Flat ₹50 OFF above ₹199
                        </div>
                        <div className="offer-count">
                            4 offers ⌄
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
                            <h3>FLAT 50% OFF</h3>
                            <span className="coupon-details">View coupon details</span>
                        </div>

                        {MENU_ITEMS.map(item => (
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
                                    <span className="discount-tag">50% OFF</span>

                                    {item.rating > 0 && (
                                        <div className="food-rating">
                                            <div className="star-box">
                                                <span className="rating-stars">★★★★★</span>
                                            </div>
                                            <span className="votes-count">{item.votes} votes</span>
                                        </div>
                                    )}
                                    <p className="desc-text">{item.description}</p>
                                </div>

                                <div className="add-btn-container">
                                    <div className="food-image-placeholder">
                                        {/* Placeholder for food image */}
                                    </div>
                                    <button className="add-btn">ADD +</button>
                                    <span className="customizable-text">customisable</span>
                                </div>
                            </div>
                        ))}

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
                        {REELS_DATA.map(reel => (
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
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderFoodItems;
