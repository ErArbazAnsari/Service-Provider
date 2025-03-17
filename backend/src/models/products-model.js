const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
    image: { type: String, required: false },
    product: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: String, required: false },
    featured: { type: Boolean, required: false, default: false },
});

// create model from schema
const Product = model("Product", productsSchema);
module.exports = Product;
