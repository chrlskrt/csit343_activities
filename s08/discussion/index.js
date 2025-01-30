console.log("This is s08. Yehey!");

// [SECTION] Understanding Scope in JavaScript
// Scope - determines the accessibility and viisbility of variables in JavaScript

// Types of Scope in JavaScript
// 1. Global Scope - accessible anywhere in your code
const globalVariable = "I'm a global variable";

function displayGlobal() {
  console.log(globalVariable);
}

displayGlobal();
console.log(globalVariable);

// 2. Local Scope -
// 2.1. Function Scope - variables declared inside a function usng let or const are scoped to that function
function localFunction() {
  let localVariable = "I'm a local variable";
  console.log(localVariable);
}
localFunction();
// console.log(localVariable);

// 2.2. Block Scope ({} - if, for, while) - variables declared with let or const inside these blocks are scoped to that specific block
{
  // let blockVariable = "I'm a block variable";
  var blockVariable = "I'm a block variable"; // will only work if "var"; will not work if "let"/"const"
  console.log(blockVariable);
}

// console.log(blockVariable);

// [SECTION] Return Statement
// allow us to output a value from a function to be passed to the line/block of code that invoked/called in the function
// Return Statement
function returnFullName() {
  return "Jeffrey" + " " + "Smith" + " " + "Bezos";
  console.log("This message will not be printed");
}

let fullName = returnFullName();
console.log(fullName);

console.log(returnFullName());

// [SECTION] console.log vs return statements
function returnFullAddress() {
  let fullAddress = {
    street: "#44 Maharlika St.",
    city: "Tarlac City",
    province: "Tarlac",
  };

  return fullAddress;
}

let myAddress = returnFullAddress();
console.log(myAddress);

function printPlayerInfo() {
  console.log("Username: " + "White_knight");
  console.log("Level: " + 95);
  console.log("Job: " + "Paladin");
}

// returns undefined because printPlayerInfo does not return any data
// It only display the details in the console
let user1 = printPlayerInfo();
console.log(user1);

// You can return almost any data types from a function.
function returnSumOfNumbers() {
  return 5 + 10;
}

let sumOf5and10 = returnSumOfNumbers();
console.log(sumOf5and10);

let total = 100 + returnSumOfNumbers();
console.log(total);

// Simulates getting an array of user names from database
function getGuildMembers() {
  return ["White_knight", "healer2000", "andrewthehero"];
}

console.log(getGuildMembers());