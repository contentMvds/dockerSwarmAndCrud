const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const db = require('../config/db');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
