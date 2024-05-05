const express = require("express");
const router = express.Router();
const PoController = require("./../controllers/Pocontrollers");

router
  .route("/purchase_orders/")
  .post(PoController.CreatePurchaseOrder)
  .get(PoController.GetAllPurchaseOrder);

module.exports = router;
