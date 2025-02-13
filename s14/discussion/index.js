// console.log("hello world!")

/*
	[SECTION] For Loop
	- for loop is more flexible than a while and do-while loop:
		1. initialization: value that will track the progression of the loop
		2. expression/condition: evaluation to determine whether the loop will run one more time
		3. finalExpression/iteration: indicates how the loop advances.
	
		- Syntax:
			for (initialization; expression/condition; iteration) {
				// statement
			}
*/

for (let count = 0; count <= 20; count++) {
  console.log("for loop: " + count);
}

// [SECTION] FOR loop w string

let myString = "alex";

//characters in string may be counted using the .length property
console.log(myString.length);

// Accessing elements of a string
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);
console.log(myString[4]);

// Create a loop that will print out the individual letters of myString variable.
// to get the last character/element of a string or array it will be string.length - 1
for (let x = 0; x < myString.length; x++) {
  console.log("Individual letters:  " + myString[x]);
}

let myName = "AlEx";

/*
		Mini Activity (5 mins)
		1. Create a loop that prints each letter of myName variable individually. 
				- If the letter is a vowel, print the number 3 instead.
		2. Use the `.toLowerCase()` method to convert the current letter to lowercase before evaluation.
		3. Take a screenshot of the output in the browser console and send it in the chat.
*/

for (let i = 0; i < myName.length; i++) {
  let currentLetter = myName[i].toLowerCase();

  if (
    currentLetter === "a" ||
    currentLetter === "e" ||
    currentLetter === "i" ||
    currentLetter === "o" ||
    currentLetter === "u"
  ) {
    console.log(3);
  } else {
    console.log(myName[i]);
  }
}
