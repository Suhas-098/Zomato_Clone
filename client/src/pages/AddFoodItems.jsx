import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/AddFoodItems.css';
import '../styles/PartnerDashboard.css'; // Import dashboard styles for header
import axios from "axios";

function AddFoodItems() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //STATE MANAGEMENT
    const [foodName, setFoodName] = useState("");
    const [foodPrice, setFoodPrice] = useState("");
    const [foodDescription, setFoodDescription] = useState("");
    const [foodCategory, setFoodCategory] = useState("");
    const [foodQuantity, setFoodQuantity] = useState("");
    const [foodImage, setFoodImage] = useState(null);
    const [foodVideo, setFoodVideo] = useState(null);

    useEffect(() => {
        // Check if cookie exists
        const hasToken = document.cookie.split("; ").some(row => row.startsWith("token="));
        setIsLoggedIn(hasToken);

        // Optional: Redirect if not logged in
        if (!hasToken) navigate("/restaurantPartner/login");
    }, []);

    //HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('foodName', foodName);
        formData.append('foodPrice', foodPrice);
        formData.append('foodDescription', foodDescription);
        formData.append('foodCategory', foodCategory);
        formData.append('foodQuantity', foodQuantity);
        formData.append('foodImage', foodImage);
        formData.append('foodVideo', foodVideo);

        //API CALL
        try {
            const response = await axios.post("http://localhost:3000/api/foodItems/add", formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })
            alert("Food item added!")
            navigate("/added-food-items-dashboard");
        } catch (error) {
            console.log(error)
            alert("Failed to add food item")
        }
    };

    //HANDLE FILE CHANGES
    const handleImageChange = (e) => setFoodImage(e.target.files[0]);
    const handleVideoChange = (e) => setFoodVideo(e.target.files[0]);

    if (!isLoggedIn) {
        return (
            <div className="add-food-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2>Please login to add food items</h2>
                <Link to="/restaurantPartner/login" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
                    Login as Partner
                </Link>
            </div>
        );
    }

    return (
        <div className="dashboard-container"> {/* Use dashboard container for consistent bg */}
            {/* Header */}
            <div className="dashboard-header">
                <div className="dashboard-nav">
                    <Link to="/added-food-items-dashboard" className="dashboard-brand" style={{ textDecoration: 'none', color: 'white' }}>
                        &larr; Back
                    </Link>
                </div>
                <div className="dashboard-welcome">
                    <h2>Add New Item</h2>
                    <p>Expand your menu with delicious new additions</p>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="add-food-card" style={{ marginTop: '0' }}>
                    <form className="add-food-form" onSubmit={handleSubmit}>

                        {/* Basic Details Row */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="foodName">Food Name *</label>
                                <input
                                    type="text"
                                    id="foodName"
                                    className="form-input"
                                    placeholder="e.g. Butter Chicken"
                                    required
                                    value={foodName}
                                    onChange={(e) => setFoodName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="foodPrice">Price (₹) *</label>
                                <input
                                    type="number"
                                    id="foodPrice"
                                    className="form-input"
                                    placeholder="e.g. 350"
                                    required
                                    value={foodPrice}
                                    onChange={(e) => setFoodPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Category & Quantity Row */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="foodCategory">Category *</label>
                                <select
                                    id="foodCategory"
                                    className="form-select"
                                    required
                                    value={foodCategory}
                                    onChange={(e) => setFoodCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Beverages">Beverages</option>
                                    <option value="Desserts">Desserts</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="foodQuantity">Quantity *</label>
                                <input
                                    type="text"
                                    id="foodQuantity"
                                    className="form-input"
                                    placeholder="e.g. 1 Plate / 500ml"
                                    required
                                    value={foodQuantity}
                                    onChange={(e) => setFoodQuantity(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="form-group">
                            <label htmlFor="foodDescription">Description</label>
                            <textarea
                                id="foodDescription"
                                className="form-textarea"
                                placeholder="Describe the dish... (ingredients, taste, etc.)"
                                value={foodDescription}
                                onChange={(e) => setFoodDescription(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Media Uploads */}
                        <div className="form-row">
                            <div className="form-group">
                                <label>Food Image</label>
                                <div className="file-upload-group">
                                    <label htmlFor="foodImage" className="file-label">
                                        <span className="upload-icon">📷</span>
                                        <span>Click to upload image</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="foodImage"
                                        className="file-input"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {foodImage && (
                                        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#2ecc71' }}>Selected: {foodImage.name}</p>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Food Video (Optional)</label>
                                <div className="file-upload-group">
                                    <label htmlFor="foodVideo" className="file-label">
                                        <span className="upload-icon">🎥</span>
                                        <span>Click to upload video</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="foodVideo"
                                        className="file-input"
                                        accept="video/*"
                                        onChange={handleVideoChange}
                                    />
                                    {foodVideo && (
                                        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#2ecc71' }}>Selected: {foodVideo.name}</p>
                                    )}

                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Add Food Item
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFoodItems;
