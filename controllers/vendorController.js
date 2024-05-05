const Vendor = require("./../models/vendorModel");

exports.createVendor = async (req, res) => {
  try {
    // Extract data from request body
    const {
      name,
      contact_details,
      address,
      vendor_code,
      on_time_delivery_rate,
      quality_rating_avg,
      average_response_time,
      fulfillment_rate,
    } = req.body;

    // Check if a vendor with the same vendor code already exists
    const existingVendor = await Vendor.findOne({ vendor_code });
    if (existingVendor) {
      return res.status(400).json({
        success: false,
        error: "Vendor with the same vendor code already exists",
      });
    }

    // Create the vendor directly in the database
    const newVendor = await Vendor.create({
      name,
      contact_details,
      address,
      vendor_code,
      on_time_delivery_rate,
      quality_rating_avg,
      average_response_time,
      fulfillment_rate,
    });

    // Save the new vendor to the database
    await newVendor.save();

    return res.status(201).json({
      success: true,
      message: "Vendor created successfully",
      vendor: newVendor,
    });
  } catch (error) {
    // Handle error
    console.error("Error creating vendor:", error);
    return res.status(500).json({ success: false, error: error.errors });
  }
};

exports.getAllVendors = async (req, res) => {
  try {
    const allData = await Vendor.find();
    return res.status(200).json({ result: allData });
  } catch (error) {
    console.error("Error creating vendor:", error);
    return res.status(500).json({ success: false, error: error.errors });
  }
};

exports.getVendor = async (req, res) => {
  const vendorId = req.params.id;
  try {
    const allData = await Vendor.find({ _id: vendorId });
    return res.status(200).json({ result: allData });
  } catch (error) {
    console.error("Error creating vendor:", error);
    return res.status(500).json({ success: false, error: "Id does not exist" });
  }
};

exports.deleteVendor = async (req, res) => {
  const vendorId = req.params.id;
  try {
    const vendorData = await Vendor.findByIdAndDelete(vendorId);
    console.log(vendorData);
    return res.json({ result: "Vendor data deleted" });
  } catch (error) {
    console.error("Error creating vendor:", error.errors);
    return res.status(500).json({ success: false, error: "Id does not exist" });
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const vendorId = req.params.id;
    const updateData = req.body;

    // Find the vendor by ID and update its details
    const updatedVendor = await Vendor.findByIdAndUpdate(vendorId, updateData, {
      new: true,
    });

    if (!updatedVendor) {
      return res
        .status(404)
        .json({ success: false, error: "Vendor not found" });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Vendor details updated successfully",
        vendor: updatedVendor,
      });
  } catch (error) {
    console.error("Error updating vendor:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};
