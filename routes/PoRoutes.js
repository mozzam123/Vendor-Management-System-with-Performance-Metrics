const express = require("express");
const router = express.Router();
const PoController = require("./../controllers/Pocontrollers");

router.route("/purchase_orders/").post(PoController.CreatePO)

module.exports = router