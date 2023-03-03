const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const productsMock = require('../mocks/products.mock');

describe('Testa productsModel', async function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Lista produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const result = await productsModel.getAllProducts();
    expect(result).to.be.deep.equal(productsMock);
  });

  it('Acha produto pelo ID', async function () {
    sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);
    const result = await productsModel.getProductById(1);
    expect(result).to.be.deep.equal(productsMock[0]);
  });

  it('ID incorreto retorna undefined', async function () {
    sinon.stub(connection, 'execute').resolves([])
    const result = await productsModel.getAllProducts(13);
    expect(result).to.be.equal(undefined);
  })

});