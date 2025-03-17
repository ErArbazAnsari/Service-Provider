const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

// Generate a token for the user
userSchema.methods.generateToken = function () {
    return jwt.sign(
        {
            userId: this._id,
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.SECRET_KEY,
        { expiresIn: "30d" }
    );
};

// Define the User model or collection in the database
const User = mongoose.model("User", userSchema);

module.exports = User;
