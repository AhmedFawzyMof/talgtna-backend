const express = require("express");
const router = express.Router();
const controller = require("../controllers/Products.controller");

router.get("/:id", controller.ProductById);

module.exports = router;
