const express = require('express');
const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProduct');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.post('/', validateProductName, productsController.insertProduct);

module.exports = productsRouter;