import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reels.css';

const ReelItem = ({ reel, isActive }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(reel.likes);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isActive) {
            video.play().catch(err => console.log('Autoplay prevented:', err));
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }, [isActive]);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleVisitStore = () => {
        // Navigate to food order page with store ID
        navigate(`/store/${reel.storeId}`);
    };

    const handleComment = () => {
        // Implement comment functionality
        console.log('Comment clicked for reel:', reel.id);
    };

    const handleShare = async () => {
        const shareData = {
            title: reel.storeName,
            text: reel.description,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                // Use Web Share API if available
                await navigator.share(shareData);
                console.log('Shared successfully');
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Error sharing:', err);
            }
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        const video = videoRef.current;
        if (video) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                video.requestFullscreen();
            }
        }
    };

    return (
        <div className="reel-item">
            <div className="reel-content">
                <video
                    ref={videoRef}
                    className="reel-video"
                    src={reel.videoUrl}
                    loop
                    playsInline
                    onClick={handleVideoClick}
                />

                {!isPlaying && (
                    <div className="play-indicator">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="white" opacity="0.8">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                )}

                {/* Top Video Controls */}
                <div className="video-top-controls">
                    <button className="top-control-btn" onClick={toggleMute}>
                        {isMuted ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <line x1="23" y1="9" x2="17" y2="15" />
                                <line x1="17" y1="9" x2="23" y2="15" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                        )}
                    </button>

                    <button className="top-control-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                        </svg>
                    </button>

                    <button className="top-control-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>

                    <button className="top-control-btn" onClick={toggleFullscreen}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                        </svg>
                    </button>
                </div>

                {/* Bottom Content */}
                <div className="reel-bottom">
                    <p className="reel-description">{reel.description}</p>
                    <button className="visit-store-btn" onClick={handleVisitStore}>
                        Visit Store
                    </button>
                </div>
            </div>

            {/* Right Side Actions - Outside Container */}
            <div className="reel-actions">
                <button
                    className={`action-btn ${isLiked ? 'liked' : ''}`}
                    onClick={handleLike}
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill={isLiked ? 'white' : 'none'} stroke="white" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span className="action-count">{likes}</span>
                </button>

                <button className="action-btn">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                    </svg>
                    <span className="action-count">Dislike</span>
                </button>

                <button className="action-btn" onClick={handleComment}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="action-count">{reel.comments}</span>
                </button>

                <button className="action-btn" onClick={handleShare}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <span className="action-count">Share</span>
                </button>
            </div>
        </div>
    );
};

export default ReelItem;
