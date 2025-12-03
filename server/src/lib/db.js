import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if (connection) {
            console.log("MongoDB connected successfully", connection.connection.host);
        }
    } catch (error) {
        console.log("Error while connecting to MongoDB", error);
        process.exit(1);

    }
};