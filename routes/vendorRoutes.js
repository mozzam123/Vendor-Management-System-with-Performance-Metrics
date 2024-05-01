const express = require("express")
const router = express.Router()
const vendorController = require("./../controllers/vendorController")


router.route("/getpage").get(vendorController.getpage)



module.exports = router