const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const insertProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (id, name) => {
  const [{ insertId }] = await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?);',
    [name, id],
  );
  return insertId;
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
};
