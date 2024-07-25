const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1.4 and 3.6', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should return 5 when inputs are 1.5 and 3.4', () => {
    assert.strictEqual(calculateNumber(1.5, 3.4), 5);
  });

  it('should return 6 when inputs are 2.5 and 3.6', () => {
    assert.strictEqual(calculateNumber(2.5, 3.6), 7);
  });

  it('should return 0 when inputs are -0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should return -4 when inputs are 1.5 and 1.5', () => {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });

  it('should return -4 when inputs are -1.4 and -2.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });
});
