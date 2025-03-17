const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "User Unauthorized" });
    }

    // Assume token is in the format "Bearer token", e.g., "Bearer 1234"
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log(jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
        // Check if the token contains the user information

        if (!isVerified || !isVerified.email) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Invalid token payload" });
        }

        // Find the user in the database
        const userData = await User.findOne({ email: isVerified.email }).select(
            {
                password: 0,
            }
        );

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // console.log(userData);

        // Attach user data and token to the request object
        req.userData = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = authMiddleware;
