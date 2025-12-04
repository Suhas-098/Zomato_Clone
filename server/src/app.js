import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import addFoodItemsRoutes from "./routes/auth.addFoodItems.routes.js";
import foodRoutes from "./routes/auth.food.routes.js";

dotenv.config({ path: "./.env" });


const app = express();
app.use(cookieParser());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Zomato Clone is Running Properly");
});

//auth routes
app.use("/api/auth", authRoutes);

//add food items routes
app.use("/api/foodItems", addFoodItemsRoutes);

//food routes
app.use("/api/food", foodRoutes);

export default app;