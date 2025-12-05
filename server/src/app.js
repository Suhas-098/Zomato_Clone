import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import addFoodItemsRoutes from "./routes/auth.addFoodItems.routes.js";
import foodRoutes from "./routes/auth.food.routes.js";
import cors from "cors";

dotenv.config({ path: "./.env" });


const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(cookieParser());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Zomato Clone is Running Properly");
});

//auth routes for both user and restaurant partner
app.use("/api/auth", authRoutes);

//add food items by restaurant partner
app.use("/api/foodItems", addFoodItemsRoutes);

//food routes to get all food items added by restaurant partner
app.use("/api/food", foodRoutes);

export default app;