const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection to DB is successful");
    } catch (error) {
        console.log("Error in connecting to DB", error);
        process.exit(0); // Exit the process if connection fails
    }
};

module.exports = connectDB;
