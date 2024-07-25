const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 0 when inputs are 1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });

    it('should return 1 when inputs are 1.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 0.4), 1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error when type is invalid', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error, 'Invalid type');
    });
  });
});
