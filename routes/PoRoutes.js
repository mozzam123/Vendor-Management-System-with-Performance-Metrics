const express = require("express");
const router = express.Router();
const PoController = require("./../controllers/Pocontrollers");

router
  .route("/purchase_orders/")
  .post(PoController.CreatePurchaseOrder)
  .get(PoController.GetAllPurchaseOrders);

router
  .route("/purchase_orders/:id")
  .get(PoController.GetPurchaseOrder)
  .put(PoController.updatePurchaseOrder);

module.exports = router;
