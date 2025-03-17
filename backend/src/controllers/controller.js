const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Controllers

// Login Controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const userExit = await User.findOne({ email });
        if (!userExit) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Check if the password is correct
        const user = await bcrypt.compare(password, userExit.password);
        // const user = await userExit.comparePassword(password);

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        } else {
            res.status(200).json({
                message: "Login Successfull 😊",
                token: await userExit.generateToken(),
                userId: userExit._id.toString(),
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        // next(error); // error middleware will handle the error
    }
};

// Register Controller
const register = async (req, res) => {
    const { username, email, password, phone } = req.body;
    
    // Check if the user already exists

    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(400).json({ message: "User Already Exists" });
    }

    // Hash the password
    const saltRound = 10;
    const hashed_password = await bcrypt.hash(password, saltRound);

    // Create a new user
    const userCreated = await User.create({
        username,
        email,
        password: hashed_password,
        phone,
    });

    // console.log(userCreated);
    res.status(201).json({
        msg: "Registration Successfull 😊",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
    });
};

// User Controller - to send the user data to frontend.
const user = async (req, res) => {
    try {
        const userData = req.userData; // get the user data from the request.
        // console.log(userData);
        res.status(200).json({ userData });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Export the functions
module.exports = {
    route: {
        login,
        register,
        user,
    },
};
