const mongoose = require("mongoose");

// Define schema for Historical Performance model
const historicalPerformanceSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  date: { type: Date, required: true },
  on_time_delivery_rate: { type: Number },
  quality_rating_avg: { type: Number },
  average_response_time: { type: Number },
  fulfillment_rate: { type: Number },
});

// Create Historical Performance model
const HistoricalPerformance = mongoose.model(
  "HistoricalPerformance",
  historicalPerformanceSchema
);

module.exports = HistoricalPerformance;
