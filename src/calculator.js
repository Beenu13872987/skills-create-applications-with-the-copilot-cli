#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√ or sqrt)
 * 
 * Usage: node calculator.js <num1> <operator> <num2>
 * Example: node calculator.js 10 + 5
 * For square root: node calculator.js sqrt 16
 */

// Addition operation
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction operation
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication operation
function multiply(num1, num2) {
  return num1 * num2;
}

// Division operation with zero division check
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return num1 / num2;
}

// Modulo operation - returns the remainder of division
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

// Exponentiation operation - raises base to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '^':
      return power(num1, num2);
    default:
      throw new Error(`Unknown operator '${operator}'`);
  }
}

// Calculate square root (single operand operation)
function calculateSqrt(n) {
  return squareRoot(n);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate, calculateSqrt };
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2 || args.length > 3) {
    console.error('Usage: calculator <num1> <operator> <num2>');
    console.error('   or: calculator sqrt <num>');
    console.error('Operators: +, -, *, /, %, ^');
    process.exit(1);
  }

  // Handle square root operation (single operand)
  if (args[0].toLowerCase() === 'sqrt' && args.length === 2) {
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.error('Error: Operand must be a valid number');
      process.exit(1);
    }
    try {
      const result = calculateSqrt(num);
      console.log(`sqrt(${num}) = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  } else if (args.length === 3) {
    // Handle binary operations
    const num1 = parseFloat(args[0]);
    const operator = args[1];
    const num2 = parseFloat(args[2]);

    if (isNaN(num1) || isNaN(num2)) {
      console.error('Error: Both operands must be valid numbers');
      process.exit(1);
    }

    try {
      const result = calculate(num1, operator, num2);
      console.log(`${num1} ${operator} ${num2} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  } else {
    console.error('Usage: calculator <num1> <operator> <num2>');
    console.error('   or: calculator sqrt <num>');
    process.exit(1);
  }
}
