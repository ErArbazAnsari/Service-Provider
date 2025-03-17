const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

// const signUpSchema = require("../validators/auth-validator");
// const validate = require("../middlewares/validate-middleware");

router
    .route("/users")
    .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router
    .route("/users/total")
    .get(authMiddleware, adminMiddleware, adminController.getTotalUsers);

router
    .route("/users/edit/:id")
    .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
    .route("/users/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
    .route("/users/update/:id")
    .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
    .route("/contacts")
    .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
    .route("/contacts/total")
    .get(authMiddleware, adminMiddleware, adminController.getTotalContacts);

router
    .route("/contacts/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

router
    .route("/services/")
    .get(authMiddleware, adminMiddleware, adminController.getAllServices);

    router
    .route("/services/total")
    .get(authMiddleware, adminMiddleware, adminController.getTotalServices);

router
    .route("/services/edit/:id")
    .get(authMiddleware, adminMiddleware, adminController.getServiceById);

router
    .route("/services/update/:id")
    .patch(authMiddleware, adminMiddleware, adminController.updateServiceById);

router
    .route("/services/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.deleteServiceById);

// Add Service
router
    .route("/services/service/add")
    .post(authMiddleware, adminMiddleware, adminController.addService);

module.exports = router;
