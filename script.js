// Declare variables of different data types
let name = "Expense Tracker";  // string
let version = 1.0;             // number
let isActive = true;           // boolean

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Test the functions and print output to console
console.log("Welcome to " + name + " version " + version);
console.log("Is the application active? " + isActive);

let num1 = 10;
let num2 = 5;

console.log("Addition of " + num1 + " and " + num2 + ": " + add(num1, num2));
console.log("Subtraction of " + num2 + " from " + num1 + ": " + subtract(num1, num2));
console.log("Division of " + num1 + " by " + num2 + ": " + divide(num1, num2));
console.log("Multiplication of " + num1 + " and " + num2 + ": " + multiply(num1, num2));

// Test division by zero
console.log("Division of " + num1 + " by 0: " + divide(num1, 0));
