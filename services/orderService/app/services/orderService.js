const Order = require('../models/orderModel');

class OrderService {
  async createOrder(orderData) {
    try {
      const order = new Order(orderData);
      return await order.save();
    } catch (error) {
      throw error;
    }
  }

  async getAllOrders() {
    try {
      return await Order.find();
    } catch (error) {
      throw error;
    }
  }

  async getOrderById(orderId) {
    try {
      return await Order.findById(orderId);
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(orderId, updateData) {
    try {
      return await Order.findByIdAndUpdate(orderId, updateData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(orderId) {
    try {
      return await Order.findByIdAndDelete(orderId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new OrderService();
