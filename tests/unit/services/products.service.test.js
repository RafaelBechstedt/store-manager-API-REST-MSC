const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const productsMock = require('../mocks/products.mock');

describe('Testa productsService', async function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Lista produtos', async function () {
    sinon.stub(productsModel, 'getAllProducts').resolves(productsMock);
    const results = await productsService.getAllProducts();
    expect(results.message).to.be.deep.equal(productsMock);
  });

  it('Acha produto pelo ID', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(productsMock[0]);
    const results = await productsService.getProductById(1);
    expect(results.message).to.be.deep.equal(productsMock[0]);
  });

  it('ID incorreto retorna undefined', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(undefined);
    const results = await productsService.getProductById(13);
    expect(results.message).to.be.equal('Product not found');
    expect(results.type).to.be.equal(404);
  });

});