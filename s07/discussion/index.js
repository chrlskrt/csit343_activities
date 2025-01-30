// console.log("Hello World!");

// [SECTION] Functions

// lines/blocks of codes that tell our device/application to perform a certain tas when called/invoked
// complicated tasks to run several lines of codesin succession
// to avoid repeating the same lines/blocks of codes that perform the same tasks

// [SECTION] Function Declaration
/*
	Syntax:
		function functionName(){
			// code block (statements)
		}
*/
// Example:
function sayHello() {
  console.log("Hello World!");
}

// Display car information
function displayCarInfo() {
  console.log("Brand: Toyota");
  console.log("Type: Sedan");
  console.log("Price: 1,500,000");
}

// [SECTION] Function Invocation/Calling Function
sayHello();
displayCarInfo();

// declareFunc(); - we cannot invoke a function we have yet to define

// [SECTION] Function Naming Convention
// Js function names are also case-sensitive
// camelCase approach for declaring function names
// function namesshould be definitive to the task it will perform

// good practice
function displayCourses() {
  let courses = ["Science 101", "Math 101", "English 101"];
  console.log(courses);
}

displayCourses();

// Avoid generic names to avoid confusion with your code
/*function get() {
	let name = "Sampaguita";
	console.log(name);
}
get();*/

// Descriptive name - indicates the action to be executed
function getFlowerName() {
  let name = "Sampaguita";
  console.log(name);
}

getFlowerName();

// Avoid pointless and inappropriate function names
// foo, bar - placeholder variable name / meta variable name
/*function foo() {
	console.log(25%5);
};*/

foo();

// Appropriate function name
function displayModulo() {
  console.log(50 % 5);
}

displayModulo();
