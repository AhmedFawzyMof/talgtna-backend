const express = require("express");
const router = express.Router();
const controller = require("../controllers/Users.controller");

router.post("/fav", controller.AddToFav);
router.get("/favorites", controller.GetFavorites);
router.get("/coupons", controller.GetCoupons);

module.exports = router;
