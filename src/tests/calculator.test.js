const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate, calculateSqrt } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition Operation', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add from the image example: 2 + 3', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 1.5)).toBe(4);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction Operation', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract from the image example: 10 - 4', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract with result as negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract zero', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });
  });

  describe('Multiplication Operation', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply from the image example: 45 * 2', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-5, -4)).toBe(20);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(6, -3)).toBe(-18);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should handle large numbers', () => {
      expect(multiply(100, 200)).toBe(20000);
    });
  });

  describe('Division Operation', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide from the image example: 20 / 5', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide zero by non-zero number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-10, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2)).toBe(5.25);
    });

    test('should handle very small results', () => {
      expect(divide(1, 1000)).toBe(0.001);
    });
  });

  describe('Calculate Function', () => {
    test('should calculate addition with +', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction with -', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication with *', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division with /', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should calculate modulo with %', () => {
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('should calculate power with ^', () => {
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculate(10, '&', 2)).toThrow("Unknown operator '&'");
    });

    test('should throw error for division by zero', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Image Example Operations', () => {
    test('should handle all example operations from image', () => {
      // 2 + 3 = 5
      expect(calculate(2, '+', 3)).toBe(5);
      // 10 - 4 = 6
      expect(calculate(10, '-', 4)).toBe(6);
      // 45 * 2 = 90
      expect(calculate(45, '*', 2)).toBe(90);
      // 20 / 5 = 4
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should handle extended operations from image', () => {
      // modulo with 5 % 2
      expect(modulo(5, 2)).toBe(1);
      // power with 2 ^ 3
      expect(power(2, 3)).toBe(8);
      // square root with √16
      expect(squareRoot(16)).toBe(4);
    });
  });

  describe('Edge Cases and Validation', () => {
    test('should handle very large numbers', () => {
      expect(calculate(999999999, '+', 1)).toBe(1000000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculate(0.0001, '*', 10)).toBeCloseTo(0.001);
    });

    test('should handle operations with negative and positive numbers', () => {
      expect(calculate(-10, '+', 20)).toBe(10);
      expect(calculate(-10, '*', -2)).toBe(20);
    });

    test('should maintain precision in calculations', () => {
      expect(calculate(0.1, '+', 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('Modulo Operation', () => {
    test('should return remainder of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should handle modulo from extended operations image: 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should handle modulo with negative numbers', () => {
      expect(modulo(-5, 2)).toBe(-1);
      expect(modulo(5, -2)).toBe(1);
    });

    test('should return zero when number is divisible', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo by zero');
    });

    test('should handle modulo with decimal numbers', () => {
      expect(modulo(7.5, 2)).toBe(1.5);
    });

    test('should handle modulo with large numbers', () => {
      expect(modulo(1000000, 7)).toBe(1);
    });

    test('should handle modulo through calculate function', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });
  });

  describe('Power Operation', () => {
    test('should return base raised to exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle power from extended operations image: 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle power with exponent of one', () => {
      expect(power(42, 1)).toBe(42);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle negative base', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should handle decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large exponents', () => {
      expect(power(10, 5)).toBe(100000);
    });

    test('should handle power through calculate function', () => {
      expect(calculate(3, '^', 2)).toBe(9);
    });
  });

  describe('Square Root Operation', () => {
    test('should return square root of positive number', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should handle square root from extended operations image: √16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should return square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle square root with decimal result', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should handle square root of very small numbers', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });

    test('should handle square root of very large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should throw error when square root of negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative input in edge cases', () => {
      expect(() => squareRoot(-0.1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle calculateSqrt wrapper function', () => {
      expect(calculateSqrt(25)).toBe(5);
    });

    test('should throw error through calculateSqrt for negative numbers', () => {
      expect(() => calculateSqrt(-16)).toThrow('Cannot calculate square root of a negative number');
    });
  });
});
