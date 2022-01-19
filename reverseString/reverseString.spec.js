const reverseString = require('./reverseString');

describe('revserseString', () => {
  test('should return a string', () => {
    expect(typeof reverseString('hello')).toBe('string');
  });
  test('should return a reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('should return a reverse string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
  test('reverseString function works with numbers and word', () => {
    expect(reverseString('hello 12345')).toBe('54321 olleh');
  });
  test('works with numbers and punctuation', () => {
    expect(reverseString('12345! abcde!')).toBe('!edcba !54321');
  });
  test('works with blank strings', () => {
    expect(reverseString('')).toBe('');
  });
});