const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);
