/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic).
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Fix the error.
  - Run the code to check if it works.

*/

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong?
// Missing closing quote and semicolon.

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, 8]; // Fixed: Changed "eight" to 8
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong?
// "eight" is a string, not a number.

// Program C
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Fixed: Now correctly identifies non-prime numbers
    }
  }
  return true; // Fixed: Now correctly identifies prime numbers
}

console.log(isPrime(7)); // Expected true, now correct

// What’s Wrong?
// It returns true for non-prime numbers.

