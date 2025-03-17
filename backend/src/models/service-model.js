const { Schema, model } = require("mongoose");

const serviceProvider = process.env.PROVIDER || "Admin";

const serviceSchema = new Schema({
    image: { type: String, required: false },
    service: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: false },
    provider: { type: String, required: false, default: serviceProvider },
    featured: { type: Boolean, required: false, default: false },
});

// create model from schema
const Service = model("Service", serviceSchema);
module.exports = Service;
