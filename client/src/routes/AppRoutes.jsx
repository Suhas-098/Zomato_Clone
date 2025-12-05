import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRegisterPage from '../pages/UserRegisterPage';
import UserLoginPage from '../pages/UserLoginPage';
import RestaurantPartnerRegister from '../pages/RestaurantPartnerRegister';
import RestaurantPartnerLogin from '../pages/RestaurantPartnerLogin';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/user/register" element={<UserRegisterPage />} />
                <Route path="/user/login" element={<UserLoginPage />} />
                <Route path="/restaurantPartner/register" element={<RestaurantPartnerRegister />} />
                <Route path="/restaurantPartner/login" element={<RestaurantPartnerLogin />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;