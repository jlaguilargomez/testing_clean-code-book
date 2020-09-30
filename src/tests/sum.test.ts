const sum = require('../core/sum');

test('should sum two numbers', () => {
  // Arrange
  const a = 1;
  const b = 2;
  const expected = 3;

  // Act
  const result = sum(a, b);

  // Assert
  expect(result).toBe(expected);
  expect(result).not.toBe(5);
});

test('equality of objects', () => {
  const data = { one: 1 };
  data['two'] = 2;
  const expected = { one: 1, two: 2 };

  expect(data).toEqual(expected);
});
