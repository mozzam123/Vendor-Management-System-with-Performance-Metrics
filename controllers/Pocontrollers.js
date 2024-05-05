const PurchaseOrder = require("./../models/PoModel");
const Vendor = require("./../models/vendorModel");

exports.CreatePO = async (req, res) => {
  try {
    const {
      po_number,
      vendor,
      order_date,
      delivery_date,
      items,
      quantity,
      status,
      quality_rating,
      issue_date,
      acknowledgment_date,
    } = req.body;

    // check if Vendor already exist or not
    existingUser = await Vendor.findById(vendor);
    if (!existingUser) {
      return res.status(404).json({ error: "Vendor does not exist" });
    }

    // Create new PO number
    const newPO = await PurchaseOrder.create({
      po_number,
      vendor,
      order_date,
      delivery_date,
      items,
      quantity,
      status,
      quality_rating,
      issue_date,
      acknowledgment_date,
    });

    return res.json({ status: "success", result: newPO }).status(200);
  } catch (error) {
    console.log("Error: ", error);
    res.json({ error: error });
  }
};
