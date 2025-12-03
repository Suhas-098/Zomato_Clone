import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

dotenv.config({ path: "./.env" });


const app = express();
app.use(cookieParser());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Zomato Clone is Running Properly");
});

app.use("/api/auth", authRoutes);

export default app;