// console.log("Hello world!");

// [SECTION] ARITHMETIC OPERATORS
let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition: " + sum);

let difference = x - y;
console.log("Result of subtraction: " + difference);

let product = x * y;
console.log("Result of multiplication: " + product);

let quotient = x / y;
console.log("Result of division: " + quotient);

// [SECTION] ASSIGNMENT OPERATOR ( = )

// assignment operator assigns a value of right operand to a variable.
let assignmentNumber = 8;

// Addition Assignment operator
// adds the value of the right operand to a variable and assigns the result to the variable.
assignmentNumber = assignmentNumber + 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Shorthand for assignmentNumber
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// -=, *=, /=
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

assignmentNumber *= 2;
console.log(
  "Result of multiplication assignment operator: " + assignmentNumber
);

assignmentNumber /= 2;
console.log("Result of division assignment operator: " + assignmentNumber);

// [SECTION] Increment and Decrement (++/--)
// Operators that add or subtract values by 1 and reassigns the value of the variable to the increment/decrement was applied
let z = 1;

// Pre-increment (++z): Increment z, then assign value of z to
let increment = ++z;
console.log("Result of Pre-increment: " + increment);
console.log("Result of z: " + z);

// Post-increment (z++): Assign value of orig value z to increment, then increment z
increment = z++;
console.log("Result of Post-increment: " + increment);
console.log("Result of z: " + z);

// Pre-decrement (z--)
let decrement = --z;
console.log("Result of Pre-decrement: " + decrement);
console.log("Result ofz: " + z);

// Post-decrement (z--)
decrement = z--;
console.log("Result of Post-decrement: " + decrement);
console.log("Result of z: " + z);
