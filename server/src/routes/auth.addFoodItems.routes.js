import express from "express";
import { protectRouteRestaurantPartner } from "../middleware/auth.middleware.js";
import { addFoodItemsController } from "../controllers/auth.addFoodItems.controller.js";
import upload from "../middleware/multer.middleware.js";

const router = express.Router();

const upLoadVideo_Image =
    upload.fields([
        { name: "foodImage", maxCount: 1 },
        { name: "foodVideo", maxCount: 1 }
    ])


//Add Food Items for Restaurant Partner
router.post("/add", protectRouteRestaurantPartner, upLoadVideo_Image, addFoodItemsController);


export default router;
