import React from 'react';

const HeaderIllustration = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 200"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minHeight: '180px' }}
        >
            {/* Background/Atmosphere elements */}
            <circle cx="50" cy="50" r="20" fill="white" fillOpacity="0.1" />
            <circle cx="450" cy="80" r="30" fill="white" fillOpacity="0.1" />
            <circle cx="200" cy="150" r="10" fill="white" fillOpacity="0.1" />

            {/* Decorative lines/paths for "flow" */}
            <path d="M0 100 Q 150 50 300 100 T 600 100" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
            <path d="M-50 150 Q 100 100 250 150 T 550 150" stroke="white" strokeWidth="2" strokeOpacity="0.1" fill="none" />

            {/* Center Food Composition - Flat Vector Style */}
            <g transform="translate(180, 40)">

                {/* Burger */}
                <g transform="translate(0, 20)">
                    {/* Bottom Bun */}
                    <path d="M10 50 H 90 C 90 60 80 70 50 70 C 20 70 10 60 10 50 Z" fill="#F4D03F" stroke="#E67E22" strokeWidth="2" />
                    {/* Patty */}
                    <rect x="8" y="40" width="84" height="10" rx="5" fill="#8D6E63" stroke="#5D4037" strokeWidth="2" />
                    {/* Cheese */}
                    <path d="M8 40 L 92 40 L 85 45 L 80 40 L 70 45 L 60 40 L 50 45 L 40 40 L 30 45 L 20 40 L 8 40 Z" fill="#FFEB3B" />
                    {/* Lettuce */}
                    <path d="M10 40 Q 20 35 30 40 T 50 40 T 70 40 T 90 40" stroke="#4CAF50" strokeWidth="4" fill="none" />
                    {/* Top Bun */}
                    <path d="M10 35 H 90 C 90 10 70 0 50 0 C 30 0 10 10 10 35 Z" fill="#F4D03F" stroke="#E67E22" strokeWidth="2" />
                    {/* Sesame Seeds */}
                    <circle cx="40" cy="15" r="1.5" fill="#E67E22" />
                    <circle cx="60" cy="12" r="1.5" fill="#E67E22" />
                    <circle cx="30" cy="22" r="1.5" fill="#E67E22" />
                    <circle cx="70" cy="22" r="1.5" fill="#E67E22" />
                    <circle cx="50" cy="25" r="1.5" fill="#E67E22" />
                </g>

                {/* Soda Drink - Right Side */}
                <g transform="translate(100, 10)">
                    <path d="M10 80 L 0 20 H 40 L 30 80 H 10 Z" fill="#EF5350" stroke="white" strokeWidth="2" />
                    <path d="M-5 20 H 45 L 42 15 H -2 L -5 20 Z" fill="white" />
                    <path d="M15 15 L 25 0" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Fries - Left Side */}
                <g transform="translate(-50, 20)">
                    {/* Fries box */}
                    <path d="M10 80 L 0 30 H 50 L 40 80 H 10 Z" fill="#EF5350" stroke="white" strokeWidth="2" />
                    {/* Fries sticks */}
                    <rect x="5" y="10" width="5" height="40" fill="#FFEB3B" transform="rotate(-10 5 10)" />
                    <rect x="15" y="5" width="5" height="45" fill="#FFEB3B" />
                    <rect x="25" y="8" width="5" height="40" fill="#FFEB3B" transform="rotate(5 25 8)" />
                    <rect x="35" y="15" width="5" height="30" fill="#FFEB3B" transform="rotate(15 35 15)" />
                </g>
            </g>
        </svg>
    );
};

export default HeaderIllustration;
