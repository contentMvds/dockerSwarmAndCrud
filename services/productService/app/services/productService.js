const Product = require('../models/productModel');

class ProductService {
  async createProduct(productData) {
    try {
      const product = new Product(productData);
      return await product.save();
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts() {
    try {
      return await Product.find();
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      return await Product.findById(productId);
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, updateData) {
    try {
      return await Product.findByIdAndUpdate(productId, updateData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      return await Product.findByIdAndDelete(productId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
