// console.log("hello world");

let studentNumberA = "2020-1923";
let studentNumberB = "2020-1924";
let studentNumberC = "2020-1925";
let studentNumberD = "2020-1926";
let studentNumberE = "2020-1927";

let studentNumbers = [
  "2020-1923",
  "2020-1924",
  "2020-1925",
  "2020-1926",
  "2020-1927",
];

/* [SECTION] Array
	 - used to store multiple related values into a single variable or
	 declared using square brackets ( [] ) are also known as "Array Literals"
	- arrays also provide a number of methods for further manipulation
*/

let grades = [98.5, 94.3, 89.2, 90.1];
let computerBrands = ["Acer", "Lenovo", "MSI", "Fujitsu"];

// this will work
let mixedArr = [12, "ASus", null, undefined, {}]; // this is not recommended

console.log(grades);
console.log(mixedArr);

// write an array in separate line for readability
let myTasks = ["drink html", "eat javascript", "inhale css", "bake sass"];

console.log(myTasks);

// create an array with values from variables
let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];

console.log(cities);

let arr = [];
arr[3] = "Hello";

console.log(arr);
console.log(arr.length); // 4

/* [SECTION] aRRAY .length property
	 - allows us to get and set the total number of items in an array.
*/

let blankArr = [];
console.log(blankArr.length); // 0

/*

		Mini Activity: (5 mins)

		1. Create a fruit array with the elements: ["apple", "banana", "cherry"].

		2. Print the initial value of the fruit array.

		3. Remove the last element of fruit array.

		4. Print the updated fruit array and its length.

		5. Take a screenshot of the browser console and send it in the chat.
 
		Expected output:

		Initial Fruit Array: apple,banana,cherry

		Initial Fruit Array Length: 3

		Updated Fruit Array: apple,banana

		Updated Fruit Array Length: 2

*/

let fruitArray = ["apple", "banana", "cherry"];

console.log("Initial Fruit Array: " + fruitArray);
console.log("Initial Fruit Array Length: " + fruitArray.length);

// fruitArray.pop();
fruitArray.length--;

console.log("Updated Fruit Array: " + fruitArray);
console.log("Updated Fruit Array Length: " + fruitArray.length);

// Arrya with functions
function displayLength(arr) {
  console.log("Length: " + arr.length);
}

displayLength(myTasks);
displayLength(["jeff", "matt", "andrei"]);
