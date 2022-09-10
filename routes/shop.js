const express = require("express");
const path = require("path");
const router = express.Router();
const productsController = require('../controllers/products');
const adminRoutes = require("./admin");
router.get("/", productsController.getProduct);
module.exports = router;
