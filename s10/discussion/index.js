// Multiple Parameters
/*
	- In JS, providing more/less arguments than the expected
		parameters will not return an error.
		- Providing less arguments than the expected parameters will
		automatically assign an undefined value to the parameter.
 */

function createFullName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

createFullName("juan", "dela", "cruz");
createFullName("juan", "dela"); // This will not return an error. Missing parameters will default to Undefined
createFullName("juan", "dela", "cruz", "perez"); // Additional arguments will be ignored

// Using variables as arguments
let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";

createFullName(firstName, middleName, lastName);

function printFullName(middleName, firstName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

printFullName("Juan", "Dela", "Cruz");
