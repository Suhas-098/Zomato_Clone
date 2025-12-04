import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import RestaurantPartner from "../models/restaurantPartner.js";


//user controller
const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const isUserAlreadyExist = await User.findOne({ email });
        if (isUserAlreadyExist) {
            return res.status(400).json({ message: "User already exists" })
        }

        const user = await User.create({
            fullName,
            email,
            password: bcrypt.hashSync(password, 10)
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" });
        res.cookie("token", token)
        res.status(200).json({
            message: "user registered successfully", user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error in registerUser controller", error: error.message });

    }
};


const loginUser = async (req, res) => {
    try {
        //check if user is already logged in
        const isUserLoggedIn = req.cookies.token;
        if (isUserLoggedIn) {
            return res.status(400).json({ message: "User already logged in" })
        }

        //check if user exists
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user not found with this email" })
        }

        //check if password is correct
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Password" })
        }

        //generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" });
        res.cookie("token", token)
        res.status(200).json({
            message: "user logged in successfully"
        })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error in loginUser controller", error: error.message })
    }
};


const logoutUser = (req, res) => {
    try {
        const cookie = req.cookies.token;
        if (!cookie) {
            return res.status(400).json({ message: "user not logged in" })
        }
        res.clearCookie("token")
        res.status(200).json({ message: "user logged out successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error in logoutUser controller", error: error.message })
    }
}


//restaurant partner controller
const registerRestaurantPartner = async (req, res) => {
    try {
        const { RestaurantPartnerName, workEmail, workPassword } = req.body;

        const isRestaurantPartnerAlreadyExist = await RestaurantPartner.findOne({ workEmail });
        if (isRestaurantPartnerAlreadyExist) {
            return res.status(400).json({ message: "Restaurant Partner already exists" })
        }

        const restaurantPartner = await RestaurantPartner.create({
            RestaurantPartnerName,
            workEmail,
            workPassword: bcrypt.hashSync(workPassword, 10)
        })

        const token = jwt.sign({ id: restaurantPartner._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
        res.cookie("token", token)
        res.status(200).json({ message: "Restaurant Partner registered successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in registerRestaurantPartner controller", error: error.message })
    }
}


const loginRestaurantPartner = async (req, res) => {
    try {
        const { workEmail, workPassword } = req.body;

        const isRestaurantPartnerLoggedIn = req.cookies.token;
        if (isRestaurantPartnerLoggedIn) {
            return res.status(400).json({ message: "Restaurant Partner already logged in" })
        }

        const restaurantPartner = await RestaurantPartner.findOne({ workEmail });
        if (!restaurantPartner) {
            return res.status(400).json({ message: "Restaurant Partner not found" })
        }

        const isPasswordCorrect = bcrypt.compareSync(workPassword, restaurantPartner.workPassword);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Password" })
        }

        const token = jwt.sign({ id: restaurantPartner._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
        res.cookie("token", token)
        res.status(200).json({ message: "Restaurant Partner logged in successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in loginRestaurantPartner controller", error: error.message })
    }
}


const logoutRestaurantPartner = (req, res) => {
    try {
        const cookie = req.cookies.token;
        if (!cookie) {
            return res.status(400).json({ message: "Restaurant Partner not logged in" })
        }
        res.clearCookie("token")
        res.status(200).json({ message: "Restaurant Partner logged out successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error in logoutRestaurantPartner controller", error: error.message })
    }
}


export { registerUser, loginUser, logoutUser, registerRestaurantPartner, loginRestaurantPartner, logoutRestaurantPartner };