import jwt from "jsonwebtoken";
import RestaurantPartner from "../models/restaurantPartner.js";

const protectRouteRestaurantPartner = async (req, res, next) => {

    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        const restaurantPartner = await RestaurantPartner.findById(decodedData.id)

        req.restaurantPartner = restaurantPartner;

        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" })
    }
};

export default protectRouteRestaurantPartner;


