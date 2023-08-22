const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.authenticateToken, orderController.createOrder);
router.get('/', authMiddleware.authenticateToken, orderController.getAllOrders);
router.get('/:id', authMiddleware.authenticateToken, orderController.getOrderById);
router.put('/:id', authMiddleware.authenticateToken, orderController.updateOrder);
router.delete('/:id', authMiddleware.authenticateToken, orderController.deleteOrder);

module.exports = router;
