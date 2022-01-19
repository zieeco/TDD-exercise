const calculator = require('./calculator.js');

describe('calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subtract', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  test('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test('multiply', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test('should throw an error if is less than 1 and b is greater than 0', () => {
    expect(() => {
      calculator.divide(0, 10);
    }).toThrow('Math Err!');
  });
});