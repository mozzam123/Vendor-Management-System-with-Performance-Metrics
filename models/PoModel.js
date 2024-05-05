const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  po_number: { type: String, required: true, unique: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  order_date: { type: Date, required: true },
  delivery_date: { type: Date, required: true },
  items: { type: mongoose.Schema.Types.Mixed, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'canceled'], required: true },
  quality_rating: { type: Number, min: 0, max: 5, default: null },
  issue_date: { type: Date, required: true },
  acknowledgment_date: { type: Date, default: null }
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = PurchaseOrder;
