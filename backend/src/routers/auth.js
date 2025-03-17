const express = require("express");
const router = express.Router();
const { route } = require("../controllers/controller");
const authMiddleware = require("../middlewares/auth-middleware");

const signUpSchema = require("../validators/auth-validator");
const loginSchema = require("../validators/login-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/login").post(validate(loginSchema), route.login);
router.route("/register").post(validate(signUpSchema), route.register);

router.route("/user").get(authMiddleware, route.user); // To call the user route only if the user is authenticated and send the data to frontend.

module.exports = router;
