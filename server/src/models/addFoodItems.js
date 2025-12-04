import mongoose from "mongoose";

const addFoodItemsSchema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true
    },
    foodPrice: {
        type: Number,
        required: true
    },
    foodImage: {
        type: String,
    },
    foodDescription: {
        type: String,
    },
    foodCategory: {
        type: String,
    },
    foodQuantity: {
        type: String,
    },
    foodVideo: {
        type: String,
    },
    restaurantPartnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RestaurantPartner",
        required: true
    },

})

const AddFoodItems = mongoose.model("AddFoodItems", addFoodItemsSchema)

export default AddFoodItems;
