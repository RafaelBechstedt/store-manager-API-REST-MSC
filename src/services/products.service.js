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

const insertProduct = async (name) => {
  const productId = await productsModel.insertProduct(name);
  return { type: null, message: productId };
};

const updateProduct = async (id, name) => {
  await productsModel.updateProduct(id, name);
  const product = await productsModel.getProductById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

const deleteProduct = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  await productsModel.deleteProduct(id);
  return { type: null, message: '' };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
