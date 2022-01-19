const calculator = require('./calculator');

describe('calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  }
  );
  test('subtract', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  }
  );
  test('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test('multiply', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
});

