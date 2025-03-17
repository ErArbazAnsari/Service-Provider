const User = require("../models/user.js");
const Contact = require("../models/contact-model.js");
const Service = require("../models/service-model.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select({ password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
            // console.log("No users found");
        }
        return res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
            // console.log("No contacts found");
        }
        return res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const deleteUserById = async (req, res) => {
    try {
        const getId = req.params.id;
        const user = await User.deleteOne({ _id: getId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).select({
            password: 0,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne(
            { _id: id },
            {
                $set: updatedUserData,
            }
        );

        if (!updatedData) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const deleteContactById = async (req, res) => {
    try {
        const getId = req.params.id;
        const contact = await Contact.deleteOne({ _id: getId });
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res
            .status(200)
            .json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const getAllServices = async (req, res) => {
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

const updateServiceById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedServiceData = req.body;

        const updatedData = await Service.updateOne(
            { _id: id },
            {
                $set: updatedServiceData,
            }
        );

        if (!updatedData) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

const getServiceById = async (req, res) => {
    try {
        // Find the service by its ID
        const service = await Service.findOne({ _id: req.params.id });
        // console.log(service);

        // Check if the service exists
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        // Return the found service
        return res.status(200).json(service);
    } catch (error) {
        // Log the error and return a 500 status
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Internal server error" });
    }
};

const addService = async (req, res) => {
    try {
        const getData = req.body;
        const service = await Service.create(getData);
        // console.log(service);

        // Check if the service exists
        if (!service) {
            return res.status(404).json({ message: "Service not create" });
        }

        // Return the found service
        return res.status(200).json(service);
    } catch (error) {
        // Log the error and return a 500 status
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteServiceById = async (req, res) => {
    try {
        const getId = req.params.id;
        const service = await Service.deleteOne({ _id: getId });
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        return res
            .status(200)
            .json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

// Get total number of users
const getTotalUsers = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        if (!totalUsers) {
            totalUsers = 0;
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json({ regUser: totalUsers });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

// Get total number of contacts
const getTotalContacts = async (req, res) => {
    try {
        const totalContacts = await Contact.countDocuments();
        if (!totalContacts) {
            totalContacts = 0;
            return res.status(404).json({ message: "No contacts found" });
        }
        res.status(200).json({ allMsg: totalContacts });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

// Get total number of services
const getTotalServices = async (req, res) => {
    try {
        const totalServices = await Service.countDocuments();
        if (!totalServices) {
            totalServices = 0;
            return res.status(404).json({ message: "No services found" });
        }
        res.status(200).json({ allMsg: totalServices });
    } catch (error) {
        res.status(500).json({ message: error });
        // console.log(error);
    }
};

module.exports = {
    getAllUsers,
    getAllContacts,
    deleteUserById,
    getUserById,
    updateUserById,
    deleteContactById,
    getAllServices,
    updateServiceById,
    getServiceById,
    addService,
    deleteServiceById,
    getTotalUsers,
    getTotalContacts,
    getTotalServices,
};
