const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(function () {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM type and correct arguments', function () {
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);

    // Assertion: stub should have been called once with 'SUM', 100, 20
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
  });

  it('should log the correct message to the console', function () {
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);

    // Assertion: spy should have been called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));
  });
});
