const express = require("express");
const router = express.Router();
const vendorController = require("./../controllers/vendorController");

router
  .route("/vendors/")
  .post(vendorController.createVendor)
  .get(vendorController.getAllVendors);

router
  .route("/vendors/:id")
  .get(vendorController.getVendor)
  .delete(vendorController.deleteVendor)
  .put(vendorController.updateVendor);

module.exports = router;
