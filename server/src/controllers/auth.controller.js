import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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


const logoutUser = async (req, res) => {
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

export { registerUser, loginUser, logoutUser };