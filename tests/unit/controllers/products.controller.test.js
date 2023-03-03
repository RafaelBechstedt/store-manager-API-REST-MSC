const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const productsMock = require('../mocks/products.mock');
const productId01Mock = require('../mocks/productId01.mock')
const { expect } = chai;

chai.use(sinonChai);

describe('Testa productsController', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Lista produtos', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, "getAllProducts").resolves({
      type: null,
      message: productsMock,
    });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock);
  });

  it('Acha produto pelo ID', async function () {

    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves({ type: null, message: productId01Mock });

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productId01Mock);
  });
});