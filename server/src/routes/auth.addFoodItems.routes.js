import express from "express";
import protectRouteRestaurantPartner from "../middleware/auth.middleware.js";
import addFoodItemsController from "../controllers/auth.addFoodItems.controller.js";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
});

const multipleUpload = upload.fields([
    { name: "foodVideo", maxCount: 1 },
    { name: "foodImage", maxCount: 1 },
]);


const router = express.Router();

router.post("/add", protectRouteRestaurantPartner, multipleUpload, addFoodItemsController)

export default router;
