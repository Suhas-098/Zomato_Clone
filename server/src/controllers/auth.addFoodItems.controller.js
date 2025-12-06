import AddFoodItems from "../models/addFoodItems.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import RestaurantPartner from "../models/restaurantPartner.js";

// Add Food Items Controller
const addFoodItemsController = async (req, res) => {
    try {
        const { foodName, foodPrice, foodDescription, foodCategory, foodQuantity } = req.body;


        const imageFile = req.files?.foodImage?.[0] || null;
        const videoFile = req.files?.foodVideo?.[0] || null;


        if (!foodName || !foodPrice) {
            return res.status(400).json({ message: "Name and Price are required" });
        }

        let foodImage = "";
        if (imageFile) {
            try {
                foodImage = await uploadToCloudinary(imageFile.buffer, "food_items", "image");
            } catch (uploadError) {
                console.error("Cloudinary upload error:", uploadError);
                return res.status(500).json({ message: "Image upload failed" });
            }
        }

        let foodVideo = "";
        if (videoFile) {
            try {
                foodVideo = await uploadToCloudinary(videoFile.buffer, "food_items", "video");
            } catch (uploadError) {
                console.error("Cloudinary upload error:", uploadError);
                return res.status(500).json({ message: "Video upload failed" });
            }
        }

        const newFoodItem = new AddFoodItems({
            foodName,
            foodPrice,
            foodDescription,
            foodCategory,
            foodQuantity,
            foodImage,
            foodVideo,
            restaurantPartnerId: req.restaurantPartner._id
        });

        await newFoodItem.save();

        res.status(201).json({ message: "Food item added successfully", foodItem: newFoodItem });

    } catch (error) {
        console.error("Error adding food item:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get All Food Items Controller
const getAllFoodItemsController = async (req, res) => {
    try {
        const foodItems = await AddFoodItems.find({})
        res.status(200).json({ message: "Food items fetched successfully", foodItems })
    } catch (error) {
        console.error("Error fetching food items:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// Get Restaurant Details Controller
const getRestaurantDetailsController = async (req, res) => {
    try {
        const { id } = req.params;

        const restaurant = await RestaurantPartner.findById(id).select("-workPassword");
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        const foodItems = await AddFoodItems.find({ restaurantPartnerId: id });

        res.status(200).json({
            message: "Restaurant details fetched successfully",
            restaurant,
            foodItems
        });
    } catch (error) {
        console.error("Error fetching restaurant details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { addFoodItemsController, getAllFoodItemsController, getRestaurantDetailsController };
