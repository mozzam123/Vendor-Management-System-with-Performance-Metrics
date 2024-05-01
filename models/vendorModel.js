const mongoose = require('mongoose');

// Define schema for Vendor Model
const vendorSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  contact_details: { type: String, required: [true, 'Contact details are required'] },
  address: { type: String, required: [true, 'Address is required'] },
  vendor_code: { type: String, required: [true, 'Vendor code is required'], unique: [true, 'Vendor code must be unique'] },
  on_time_delivery_rate: { type: Number, required: [true, 'On-time delivery rate is required'] },
  quality_rating_avg: { type: Number, required: [true, 'Quality rating average is required'] },
  average_response_time: { type: Number, required: [true, 'Average response time is required'] },
  fulfillment_rate: { type: Number, required: [true, 'Fulfillment rate is required'] }
});

// Create Vendor model
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
