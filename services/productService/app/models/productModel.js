const mongoose = require('../config/db');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String
});

module.exports = mongoose.model('Product', productSchema);
