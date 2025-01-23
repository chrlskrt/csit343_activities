console.log("Hello World, it's me again!");

// Best practices in naming variables

// 1. Descriptive
let movieTitle = "The Godfather"; // good variable name
let x = "aiah"; // bad variable name

// 2. Start with a lowercase letter
let LastName = "Smith"; // bad variable name - Pascal Case for Classes
let lastName = "Smith"; // good variable name

// 3. Do not add spaces to your variable names. Use specific naming conventions (camelCase, snake_case, or kebab-case)
// let first name = "Mike"
// camelCase
let firstName = "Mike";

console.log(firstName);

let email_address = "mikesmith@mail.com";

// 4. Avoid using a variable with a reserved keyword
// let new = "New Addition"; // bad variable name
// console.log(new);

// Using the "=" or assignment operator, we can reassign a value to variables created using let.
let productName = "desktop computer"; //
productName = "Alienware Aurora";
console.log(productName);

// This allows us to delcare variables without initializing its value, then add value later.
let productPrice;
productPrice = 120000;
console.log(productPrice);

// const
// - should not be changed

const interest = 3.5359;
// interest = 4.489;
console.log(interest); // Assignment to constant variable error.

// Data types

// String used to create text
let myString = "";
let province = "Cebu";
let country = "Philippines";

console.log(province);
console.log(country);

// Numbers
// Integers/Whole Numbers
let myNumber = 0;
let headCount = 26;

console.log(headCount);

// Decimal Numbers/Fractions/Exponential
let grade = 98.7;
console.log(grade);

// Boolean
// true or false
let isMarried = false;
let isGoodConduct = true;

// naming convention starts with 'is'
// answerable with true or false or yes or no

console.log(isMarried);
console.log(isGoodConduct);

// null
// intentionally empty
let spouse = null;
console.log(spouse);

// undefined
// declared but not assigned with an initial value
let fullName;
console.log(fullName);

// Arrays
// Special type of data
// store collection of values, and each value in array is associated with a numeric index

// array can store different data types but is normally used to store similar data types.

// not recommended
let person = ["Tolits", 18, true, "Quezon City"];
console.log(person);

// group similar data types
let grades = [98.7, 65.2, 75.5, 94.5];
console.log(grades);

// Objects
// this are special kind of data type that's used to mimic real world objects/items
// to create complex data that contains pieces of information that are relevant to each other.

/*
  let/const objectName = {
    propertyA: value,
    propertyB: value,
    //... more properties
  }
*/

let personA = {
  fullName: "Juan Dela Cruz",
  age: 35,
  isMarried: false,
  hobbies: ["reading", "painting", "cooking"],
  address: {
    houseNumber: 345,
    street: "Aurora Avenue",
    city: "Quezon City",
    country: "Philippines",
  },
};

console.log(personA);

// useful for creating abstract objects
let myGrades = {
  firstGrading: 91.5,
  secondGrading: 88.5,
  thirdGrading: 89.5,
  fourthGrading: 90.5,
};

console.log(myGrades);
