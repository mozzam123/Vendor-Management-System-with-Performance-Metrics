const PurchaseOrder = require("./../models/PoModel");
const Vendor = require("./../models/vendorModel");

exports.CreatePurchaseOrder = async (req, res) => {
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

exports.GetAllPurchaseOrders = async (req, res) => {
  try {
    // Extract vendor ID from query parameters
    const vendorId = req.query.vendorId;

    // Define filter criteria
    const filter = vendorId ? { vendor: vendorId } : {};

    // Find purchase orders based on the filter
    const result = await PurchaseOrder.find(filter);

    res.status(200).json(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.GetPurchaseOrder = async (req, res) => {
  try {
    PO_id = req.params.id;
    console.log("*************", PO_id);
    result = await PurchaseOrder.findById(PO_id);
    res.json(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ error: error });
  }
};

exports.updatePurchaseOrder = async (req, res) => {
  try {
    const PurchaseOrderId = req.params.id;
    const updateData = req.body;

    // Find the vendor by ID and update its details
    const updatePurchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      PurchaseOrderId,
      updateData,
      {
        new: true,
      }
    );

    if (!updatePurchaseOrder) {
      return res
        .status(404)
        .json({ success: false, error: "purchase Order not found" });
    }

    return res.status(200).json({
      success: true,
      message: "purchase Order details updated successfully",
      PurchaseOrder: PurchaseOrderId,
    });
  } catch (error) {
    console.error("Error updating vendor:", error);
    return res.status(500).json({ success: false, error: error });
  }
};

exports.deletePurchaseOrder = async (req, res) => {
  const PurchaseOrderId = req.params.id;
  try {
    const PurchaseOrderData = await PurchaseOrder.findByIdAndDelete(
      PurchaseOrderId
    );
    console.log(PurchaseOrderData);
    return res.json({ result: "Purchase order data deleted" });
  } catch (error) {
    console.error("Error creating vendor:", error.errors);
    return res.status(500).json({ success: false, error: "Id does not exist" });
  }
};
