#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <num1> <operator> <num2>
 * Example: node calculator.js 10 + 5
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
    default:
      throw new Error(`Unknown operator '${operator}'`);
  }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { add, subtract, multiply, divide, calculate };
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: calculator <num1> <operator> <num2>');
    console.error('Operators: +, -, *, /');
    process.exit(1);
  }

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
}
