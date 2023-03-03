const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale.id AS saleId, sale.date, sp.product_id AS productId, sp.quantity
     FROM StoreManager.sales AS sale
     INNER JOIN 
     StoreManager.sales_products AS sp
     ON sp.sale_id = sale.id
     ORDER BY sale.id, productId`,
  );
  return result;
};

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sale.date, sp.product_id AS productId, sp.quantity
     FROM StoreManager.sales_products AS sp
     INNER JOIN
     StoreManager.sales AS sale
     ON sale.id= sp.sale_id 
      WHERE id = ?
      ORDER BY sale.id, productId`,
    [id],
  );
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
};
