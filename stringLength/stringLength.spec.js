const stringLength = require('./stringLength');

describe('stringLength', () => {
  test('should return a number', () => {
    expect(typeof stringLength('string')).toBe('number');
  });
  test('should return the length of the string', () => {
    expect(stringLength('string')).toBe(6);
  });
  test('should throw an error if the string is not between 1 and 10 characters long', () => {
  expect(() => {
    stringLength('stringifying')
  }).toThrow('Please enter a string between 1 and 10 characters long');
  });
});
