import React, { useState, useRef, useEffect } from 'react';
import ReelItem from './ReelItem';
import './Reels.css';

const Reels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    // Sample data - replace with actual API data
    const reelsData = [
        {
            id: 1,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Delicious Butter Chicken with Naan - A perfect blend of spices and creamy texture that will make your taste buds dance!',
            likes: 1234,
            comments: 89,
            storeName: 'Spice Paradise',
            storeId: 1
        },
        {
            id: 2,
            videoUrl: 'https://www.w3schools.com/html/movie.mp4',
            description: 'Fresh Pizza straight from the oven - Crispy crust, melted cheese, and premium toppings!',
            likes: 2456,
            comments: 156,
            storeName: 'Pizza Heaven',
            storeId: 2
        },
        {
            id: 3,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            description: 'Authentic Biryani with tender meat and aromatic rice - Experience the royal flavors!',
            likes: 3890,
            comments: 234,
            storeName: 'Biryani House',
            storeId: 3
        }
    ];

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

    return (
        <div className="reels-container" ref={containerRef}>
            {reelsData.map((reel, index) => (
                <ReelItem
                    key={reel.id}
                    reel={reel}
                    isActive={index === currentIndex}
                />
            ))}
        </div>
    );
};

export default Reels;
