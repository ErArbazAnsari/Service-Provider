const { Schema, model } = require("mongoose");

const blogsSchema = new Schema({
    image: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    featured: { type: Boolean, required: false, default: false },
});

// create model from schema
const Blog = model("Blog", blogsSchema);
module.exports = Blog;
