// console.log("hello world!");

// [SECTION] JS Type Coercion
// automatically changes one value type to another.
let numA = "10";
let numB = 12;

/*
  Adding a string and a number will 
  result to the number being converted 
  as a string, and the result will be a string.
*/
let coercion = numA + numB;
console.log("Coercion: " + coercion);
console.log("Type of coercion: " + typeof coercion);

coercion = numA * numB;
console.log("Coercion: " + coercion);
console.log("Type of coercion: " + typeof coercion);

// Adding a boolean to a number results to a number
let coercionTrue = true + 1;
console.log("CoercionTrue: " + coercionTrue);
console.log("Type of coercionTrue: " + typeof coercionTrue);

let coercionFalse = false + 1;
console.log("CoercionFalse: " + coercionFalse);
console.log("Type of coercionFalse: " + typeof coercionFalse);

// Arrays (and objects) are compared by reference (memory address), not by value.
let coercionObj = [] == [];
console.log("CoercionObj: " + coercionObj); // results to false

// [SECTION] Comparison Operators

// Strict Equality(===)

/*
    - Checkes whether the operands are equal and have the same value.
    - Also compares their data types.
*/

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === "1");
console.log(0 === false);

// Strict Inequality Operator
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== "1");
console.log(0 !== false);

// [SECTION] Comparison Operator (>, <, >=, <=)
// checks one value if greater or less than the other values

console.log("Comparison Operator");
let a = 50;
let b = 65;

// Greater than operator
let isGreaterThan = a > b;

// Less than operator
let isLessThan = a < b;

// Greater than or equal
let isGTorEqual = a >= b;

// Less than or equal
let isLTorEqual = a <= b;

console.log("Is a greater than b: " + isGreaterThan);
console.log("Is a less than b: " + isLessThan);
console.log("Is a greater than or equal to b: " + isGTorEqual);
console.log("Is a less than or equal to b: " + isLTorEqual);

let numStr = "50";
console.log(a >= numStr); // true - forced
// type coercion to change string to a number
console.log(b <= numStr); // false - 65 is not less than or equal to 50

let str = "twenty";
console.log(b >= str); // false
// NaN - not a number
// Since the string is not numeric, it will be converted to a number and it will result to NaN. is 65 greater than NaN

// NaN - result of unsuccessful conversion from String to number of an alphanumeric string.
console.log(b * str); // NaN

// [SECTION] Logical Operators (&&, ||, !)
let isLegalAge = true;
let isRegistered = false;

// Logical AND operator (&&)
// returns true if all operands are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of logical AND operator: " + allRequirementsMet);

// Logical OR operator (||)
// returns true if at least one operand is true
let someRequirementMet = isLegalAge || isRegistered;
console.log("Result of logical OR operator: " + someRequirementMet);

// Logical NOT operator (!)
let someRequirementsNotMet = !isRegistered;
console.log("Result of logical NOT operator: " + someRequirementsNotMet);
