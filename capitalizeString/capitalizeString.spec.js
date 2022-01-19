const capitalizeString = require('./capitalizeString.js');

describe('capitalizeString', () => {
  test('should return a string', () => {
    expect(typeof capitalizeString('hello')).toBe('string');
  });
  test('it should capitalize the first letter of the string and return the string', () => {
    expect(capitalizeString('microverse')).toBe('Microverse');
  });
  test('it should not capitalize the first letter of the string if it is already capitalized', () => {
    expect(capitalizeString('Microverse')).toBe('Microverse');
  });
});
