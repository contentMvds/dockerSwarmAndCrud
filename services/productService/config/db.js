const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/products_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = mongoose;
