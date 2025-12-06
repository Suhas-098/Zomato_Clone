import express from "express";
import { protectRouteUser } from "../middleware/auth.middleware.js";
import { getAllFoodItemsController, getRestaurantDetailsController } from "../controllers/auth.addFoodItems.controller.js";

const router = express.Router();

//get all food items that restaurant partner added
router.get("/all", protectRouteUser, getAllFoodItemsController);

//get specific restaurant details and menu
router.get("/restaurant/:id", protectRouteUser, getRestaurantDetailsController);


export default router;