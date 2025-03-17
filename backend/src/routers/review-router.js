const express = require("express");
const router = express.Router();
const submitReview = require("../controllers/review-controller");

router.route("/store").post(submitReview);

module.exports = router;