const express = require('express');
const { productsController } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductById);
productsRouter.post('/', productsController.insertProduct);

module.exports = productsRouter;