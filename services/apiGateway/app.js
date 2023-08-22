const express = require('express');
const axios = require('axios');
const app = express();

app.get('/products/:productId', async (req, res) => {
    const productId = req.params.productId;
    
    try {
        // Aqui estamos fazendo chamadas aos serviços de usuário e produto usando axios
        const userResponse = await axios.get(`http://localhost:3001/users/${productId}`);
        const productResponse = await axios.get(`http://localhost:3002/products/${productId}`);

        const user = userResponse.data;
        const product = productResponse.data;

        const result = {
            user,
            product
        };

        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('API Gateway running on port 3000');
});
