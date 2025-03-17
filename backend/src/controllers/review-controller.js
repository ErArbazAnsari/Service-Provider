const Review = require("../models/customer-reviews");

const submitReview = async (req, res) => {
    try {
        const response = req.body;
        console.log(response);
        await Review.create(response);
        return res.status(200).json({ message: "Review store successfully" });
    } catch (error) {
        res.status(500).json({ message: "Review Not store in db" });
    }
};

module.exports = submitReview;
