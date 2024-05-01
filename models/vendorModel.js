const mongoose = require('mongoose');

// Define schema for Vendor Model
const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_details: { type: String, required: true },
  address: { type: String, required: true },
  vendor_code: { type: String, required: true, unique: true },
  on_time_delivery_rate: { type: Number, required: true },
  quality_rating_avg: { type: Number, required: true },
  average_response_time: { type: Number, required: true },
  fulfillment_rate: { type: Number, required: true }
});

// Create Vendor model
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
