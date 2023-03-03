const express = require('express');
const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProduct');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.post('/', validateProductName, productsController.insertProduct);
productsRouter.put('/:id', validateProductName, productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;