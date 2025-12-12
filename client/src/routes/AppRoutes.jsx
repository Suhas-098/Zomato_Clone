import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRegisterPage from '../pages/UserRegisterPage';
import UserLoginPage from '../pages/UserLoginPage';
import RestaurantPartnerRegister from '../pages/RestaurantPartnerRegister';
import RestaurantPartnerLogin from '../pages/RestaurantPartnerLogin';
import WelcomePage from '../pages/WelcomePage';
import Home from '../pages/Home';
import AddFoodItems from '../pages/AddFoodItems';
import OrderFoodItems from '../pages/OrderFoodItems';
import AddedFoodItemsDashboard from '../pages/AddedFoodItemsDashboard';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                //Welcome Page
                <Route path="/welcome" element={<WelcomePage />} />

                //when user register/login they will be redirected to reels page
                <Route path="/" element={<Home />} />

                //user register/login
                <Route path="/user/register" element={<UserRegisterPage />} />
                <Route path="/user/login" element={<UserLoginPage />} />

                //restaurant partner register/login
                <Route path="/restaurantPartner/register" element={<RestaurantPartnerRegister />} />
                <Route path="/restaurantPartner/login" element={<RestaurantPartnerLogin />} />

                //when restaurant partner register/login they will be redirected to add food items page
                <Route path="/add-food-items" element={<AddFoodItems />} />

                //when restaurant partner register/login or added food items they will be redirected to added food items dashboard page
                <Route path="/added-food-items-dashboard" element={<AddedFoodItemsDashboard />} />

                //when user clicks the visit store button in reels it will navigate to the restaurant partner page
                <Route path="/order-food-items/:id" element={<OrderFoodItems />} />
                <Route path="/order-food-items" element={<OrderFoodItems />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;