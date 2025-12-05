import React, { useState, useRef, useEffect } from 'react';
import ReelItem from './ReelItem';
import './Reels.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Container reference for scroll handling
    const containerRef = useRef(null);
    // Error handling
    const [error, setError] = useState(null);
    // Loading state
    const [loading, setLoading] = useState(true);

    // Reels data
    const [reelsData, setReelsData] = useState([]);

    // Scroll handling
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const itemHeight = window.innerHeight;
            const index = Math.round(scrollTop / itemHeight);
            setCurrentIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Fetch reels data from backend and error handling
    useEffect(() => {
        const fetchReelsData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/food/all',
                    { withCredentials: true }
                );

                const items = response.data.foodItems;

                const formatted = items.map(item => ({
                    _id: item._id,
                    videoUrl: item.foodVideo,
                    description: item.foodDescription,
                    likes: item.likeCount || 0,
                    comments: item.commentsCount || 0,
                    restaurantPartnerId: item.restaurantPartnerId,
                    foodName: item.foodName,
                }));

                setReelsData(formatted);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setError("unauthorized");
                } else {
                    setError("other");
                }
            }
        };

        fetchReelsData();
    }, []);


    // Render reels
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error === "unauthorized") {
    //     return (
    //         <div style={{
    //             height: "100vh",
    //             display: "flex",
    //             flexDirection: "column",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             textAlign: "center",
    //             color: "white",
    //             padding: "20px"
    //         }}>
    //             <h2>You must be logged in to view reels.</h2>

    //             <Link
    //                 to="/user/login"
    //                 style={{
    //                     marginTop: "20px",
    //                     background: "#e23744",
    //                     padding: "12px 24px",
    //                     borderRadius: "25px",
    //                     color: "white",
    //                     fontWeight: "600",
    //                     textDecoration: "none"
    //                 }}
    //             >
    //                 Login
    //             </Link>
    //         </div>
    //     );
    // }

    return (
        <div className="reels-container" ref={containerRef}>
            {reelsData.map((reel, index) => (
                <ReelItem
                    key={reel._id}
                    reel={reel}
                    isActive={index === currentIndex}
                />
            ))}
        </div>
    );
};

export default Reels;
