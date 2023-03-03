const { salesModel } = require('../models');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();

  return { type: null, message: allSales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (!sale.length) {
    return { type: 404, message: 'Sale not found' };
  }
  return { type: null, message: sale };
};

module.exports = {
  getAllSales,
  getSaleById,
};
