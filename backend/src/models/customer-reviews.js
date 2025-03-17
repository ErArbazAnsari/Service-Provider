const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema({
    image: { type: String, required: false },
    name: { type: String, required: true },
    review: { type: String, required: true },
    featured: { type: Boolean, required: false, default: false },
});

// create model from schema
const Review = model("Review", reviewsSchema);
module.exports = Review;
