import mongoose from "mongoose";

const restaurantPartnerSchema = new mongoose.Schema({
    RestaurantPartnerName: {
        type: String,
        required: true
    },
    workEmail: {
        type: String,
        required: true,
        unique: true
    },
    workPassword: {
        type: String,
        required: true
    },

},
    { timestamps: true }
);

const RestaurantPartner = mongoose.model("RestaurantPartner", restaurantPartnerSchema)

export default RestaurantPartner;