import React from 'react'
import Reels from '../components/Reels/Reels'

function Home() {
    return (
        <div>
            <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                <Reels />
            </div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;