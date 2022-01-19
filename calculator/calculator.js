const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (a === 0) {
      throw new Error('Math Err!');
    } else {
      return a / b;
    }
  },

  multiply(a, b) {
    return a * b;
  },
};

module.exports = calculator;
