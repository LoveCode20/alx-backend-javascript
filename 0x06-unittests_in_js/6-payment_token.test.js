const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with success message when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done(); // Call done to indicate the test is complete
      })
      .catch(err => {
        done(err); // Call done with error if there's any issue
      });
  });

  it('should return a resolved promise with undefined when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        assert.strictEqual(response, undefined);
        done(); // Call done to indicate the test is complete
      })
      .catch(err => {
        done(err); // Call done with error if there's any issue
      });
  });
});
