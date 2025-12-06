import React, { useEffect } from 'react'
import Reels from '../components/Reels/Reels'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const hasToken = document.cookie.split(";").some(row => row.startsWith("token="));
        if (!hasToken) {
            navigate("/user/login");
        }
    }, []);
    return (
        <div>
            <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                <Reels />
                {/* <div style={{ position: 'absolute', top: '50%', left: '18%', transform: 'translate(-50%, -50%)' }}>
                    <h1>Home Page</h1>
                </div> */}
            </div>
        </div>
    )
}

export default Home;