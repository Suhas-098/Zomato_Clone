import express from "express";
import { protectRouteUser } from "../middleware/auth.middleware.js";
import { getAllFoodItemsController } from "../controllers/auth.addFoodItems.controller.js";

const router = express.Router();


router.get("/all", protectRouteUser, getAllFoodItemsController);


export default router;