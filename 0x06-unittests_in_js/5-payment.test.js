const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', function () {
    // Call the function with arguments
    sendPaymentRequestToApi(100, 20);

    // Assertions
    assert(consoleLogSpy.calledOnce);
    assert(consoleLogSpy.calledWithExactly('The total is: 120'));
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', function () {
    // Call the function with different arguments
    sendPaymentRequestToApi(10, 10);

    // Assertions
    assert(consoleLogSpy.calledOnce);
    assert(consoleLogSpy.calledWithExactly('The total is: 20'));
  });
});
