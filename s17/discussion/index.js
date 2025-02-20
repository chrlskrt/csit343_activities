// console.log("hello world")

/* [SECTION] ARRAY MANIPULATION WITH ARRAY METHODS
	 - BUILT-in functions and methods for arrays, wherein it will allow us to manipulate and access array items.
	 - three kinds of array methods:
	 1. non-mutators - allow us to manage and perform tasks on array without updating the contents of the original array
	 2. iterators - allow us to loop over elements/items in an array and perform task with them
	 3. mutators - allow us to manage and perform tasks on array by updating the contents of the original array
 */

/* [SECTION] MUTATOR METHODS\
	- adding and removing elements from the array
*/

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log("Current Array: " + fruits);
console.log(fruits.length);

// push() - adds elements to the end of the array, and returns new length of the array
fruits.push("Mango");
console.log("Mutated array from push method:");
console.log(fruits);
console.log(fruits.length);

// add multiple elements to the array
fruits.push("Avocado", "Guava");
console.log(fruits);
console.log(fruits.length);

// function
function addFruit(fruit) {
  fruits.push(fruit);
}

addFruit("Pineapple");
console.log("Mutated array from push method:" + fruits);
console.log(fruits.length);

// pop() - removes the last element from the array and returns that element
let removedFruit = fruits.pop();
console.log("Removed fruit: " + removedFruit);
console.log("Mutated array from pop method:");
console.log(fruits);
console.log(fruits.length);

function removeFruit() {
  fruits.pop();
}

removeFruit();
console.log("Mutated array from pop method after removing one fruit:");
console.log(fruits);
console.log(fruits.length);

// splice() - simultaneously removes an elements from a specified index number and adds elements
// Syntax: arrayName.splice(startingIndex, deleteCount, elementsToBeAdded);

fruits.splice(1, 2, "Lime", "Cherry");
console.log("Mutated array from splice method:");
console.log(fruits);
console.log(fruits.length);

/*
		Mini Activity (5 mins)
		1. Create an array named guestList with the following names: ["Alice", "Bob", "Charlie", "David"]. Print the initial array.
		2. "Eve" arrives and should be placed between "Alice" and "Bob". Print the updated array.
		3. "Charlie" decides to leave. Print the updated array.
		4. The last guest on the list also decides to leave.  Print the updated array.
		5. Print the final length of guestList.
		6. Take a screenshot of the browser console and send it in the chat.
		Expected Output:
		["Alice", "Bob", "Charlie", "David"]
		["Alice", "Eve", "Bob", "Charlie", "David"]
		["Alice", "Eve", "Bob", "David"] 
		["Alice", "Eve", "Bob"] 
		Final guest list length: 3
*/

let guestList = ["Alice", "Bob", "Charlie", "David"];
console.log(guestList);

guestList.splice(1, 0, "Eve");
console.log(guestList);

guestList.splice(3, 1);
console.log(guestList);

guestList.pop();
console.log(guestList);

console.log("Final guest list length: " + guestList.length);
