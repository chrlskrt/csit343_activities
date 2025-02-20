// console.log("hello worlds")

// [SEFTION] ARRAY MUTATORS (sort, fill, copyWithin, reverse)

let fruits = ["banana", "apple", "cherry"];
console.log("before sort: " + fruits);

// sort() - rearranges the array elements in alphanumeric order

fruits.sort();
console.log("after sort: " + fruits);

// sorting numbers
let numbers = [10, 2, 30, 4, 90];
console.log("before sorting numbers: " + numbers);

/* calculates the difference between a and b
	if result is negative, a is placed before b
	if result is positive, a is placed after b
	if result is zero, position is unchanged
*/

numbers.sort((a, b) => a - b);
console.log("after sorting numbers: " + numbers);

// fill() - changes all elements in an array to a static value, from start index to an end index (not included)
let array = [1, 2, 3, 4, 5];
console.log("before fill: " + array);

array.fill(0, 1, 4);
console.log("after fill: " + array);

// copyWithin() - shallow copies part of an array to another location in the same array and returns it
// Syntax: copyWithin(indexToReplace, startIndexToCopy, endIndex+1ToCopy)
let letters = ["a", "b", "c", "d", "e"];
console.log("before copyWithin: " + letters);

letters.copyWithin(1, 3, 5);
console.log("after copyWithin: " + letters);

// reverse() - reverses the order of the elements in an array in place
let numbersToRevers = [1, 2, 3, 4, 5];
console.log("before reverse: " + numbersToRevers);
numbersToRevers.reverse();
console.log("after reverse: " + numbersToRevers);

/*
		Mini Activity (5 mins)
		1. Create an array of guestList: ["Charlie", "Alice", "David", "Bob", "Eve"]. Print the original list.
		2. Arrange the guest names in alphabetical order. Print the updated list.
		3. Rearrange the guest list in reverse alphabetical order. Print the final list.
		4. Take a screenshot of the browser console and send it in the chat.
		Expected Output:
		["Charlie", "Alice", "David", "Bob", "Eve"]
		["Alice", "Bob", "Charlie", "David", "Eve"]
		["Eve", "David", "Charlie", "Bob", "Alice"]  
*/

let guestList = ["Charlie", "Alice", "David", "Bob", "Eve"];

console.log(guestList);

guestList.sort();
console.log(guestList);

guestList.reverse();
console.log(guestList);
