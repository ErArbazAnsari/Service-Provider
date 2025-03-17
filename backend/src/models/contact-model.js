const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    image: { type: String, required: false },
    mobileNo: { type: String, required: false },
});

// create model from schema
const Contact = model("Contact", contactSchema);
module.exports = Contact;
