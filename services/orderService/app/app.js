const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/config');

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
