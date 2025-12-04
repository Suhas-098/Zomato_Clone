import express from "express";
import { registerUser, loginUser, logoutUser, registerRestaurantPartner, loginRestaurantPartner, logoutRestaurantPartner } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/user/logout", logoutUser);
router.post("/restaurantPartner/register", registerRestaurantPartner);
router.post("/restaurantPartner/login", loginRestaurantPartner);
router.post("/restaurantPartner/logout", logoutRestaurantPartner);

export default router;
