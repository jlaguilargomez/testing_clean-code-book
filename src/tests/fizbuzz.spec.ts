const fizbuzz = require('../core/fizbuzz');

describe('FizBuzz', () => {
  it('Should render 1 if received 1', () => {
    // Arrange
    const expected = 1;

    // Act
    const result = fizbuzz(1);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should render fizz if received 3', () => {
    // Arrange
    const expected = 'fizz';

    // Act
    const result = fizbuzz(3);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should render buzz if received 5', () => {
    // Arrange
    const expected = 'buzz';

    // Act
    const result = fizbuzz(5);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should render fizbuzz if received fifteen', () => {
    // Arrange
    const expected = 'fizzbuzz';

    // Act
    const result = fizbuzz(15);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should render fizz if receive any number divisible by three', () => {
    // Arrange
    const expected = 'fizz';

    // Act
    const result = fizbuzz(9);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should render buzz if receive any number divisible by five', () => {
    // Arrange
    const expected = 'buzz';

    // Act
    const result = fizbuzz(25);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should render fizzbuzz if receive any number divisible by fifteen', () => {
    // Arrange
    const expected = 'fizzbuzz';

    // Act
    const result = fizbuzz(30);

    // Assert
    expect(result).toBe(expected);
  });

  it('Should return the same number that receives', () => {
    // Arrange
    const num = 4;
    const expected = num;

    // Act
    const result = fizbuzz(num);

    // Assert
    expect(result).toBe(expected);
  });
});
