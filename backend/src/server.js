require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const router = require("./routers/auth");
const contactRoute = require("./routers/contact-router");
const reviewRoute = require("./routers/review-router");
const connectDB = require("./utils/db");
const serviceRoute = require("./routers/service-router");
const adminRoute = require("./routers/admin-router");
const cors = require("cors");
// const errorMiddleware = require("./middlewares/error-middleware");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
// app.use(errorMiddleware);

// All Routers
app.get("/", (req, res) => {
    res.send("GET request to the homepage");
});

app.use("/myapi", router);
app.use("/myapi/form", contactRoute);
app.use("/myapi/review", reviewRoute);
app.use("/myapi/data", serviceRoute);

// Admin Routes
app.use("/myapi/admin", adminRoute);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
