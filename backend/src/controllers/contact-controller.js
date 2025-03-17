const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const reponse = req.body;
        await Contact.create(reponse);
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "Message Not Delivered" });
    }
};

module.exports = contactForm;
