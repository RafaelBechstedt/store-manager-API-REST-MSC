const { productsModel } = require('../models');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return { type: null, message: allProducts };
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};
