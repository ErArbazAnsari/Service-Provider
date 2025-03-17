const Service = require("../models/service-model");

const services = async (req, res) => {
    try {
        const allServices = await Service.find();
        if (!allServices) {
            return res.status(404).json({ msg: "No services found" });
        }
        res.status(200).json({ allServices });
    } catch (error) {
        console.log(`Services Error: ${error}`);
    }
};

module.exports = services;
