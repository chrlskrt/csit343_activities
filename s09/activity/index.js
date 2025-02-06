/*
		
		1. Create a function called greet.
				- The function should accept one parameter: name.
				- The function should return a string that says hello to the name provided.
				- Return the result of the string and log the returned value.
				
				- To check, create a variable to save the value returned by the function.
				- Then log the variable in the console.
						- You can also invoke the function in the console to view the returned value of the function.
								- Note: This is optional.
			 
		2. Create a function called printMessage.
				- The function should accept one parameter: message.
				- Return the provided message.
				- Call the function three times with different messages and log the returned values.

				- To check, create a variable to save the value returned by the function.
				- Then log the variable in the console.
						- You can also invoke the function in the console to view the returned value of the function.
								- Note: This is optional.

		3. Create a function called getSquare.
				- The function should accept one parameter: num.
				- Return the square of the number.
				- Call the function with a number and log the returned value.

				- To check, create a variable to save the value returned by the function.
				- Then log the variable in the console.
						- You can also invoke the function in the console to view the returned value of the function.
								- Note: This is optional.

		4. Create a function called double.
				- The function should accept one parameter: num.
				- Return the number multiplied by 2.
				- Call the function with a number and log the returned value.

				- To check, create a variable to save the value returned by the function.
				- Then log the variable in the console.
						- You can also invoke the function in the console to view the returned value of the function.
								- Note: This is optional.

		5. Create a function called addTen.
				- The function should accept one parameter: num.
				- Return the result of adding 10 to the number.
				- Call the function with a number and log the returned value.

				- To check, create a variable to save the value returned by the function.
				- Then log the variable in the console.
						- You can also invoke the function in the console to view the returned value of the function.
								- Note: This is optional.

		6. Create a function called printLine.
				- The function should accept one parameter: line.
				- Return the string "You entered: [line]".
				- Call the function with a string and log the returned value.

				- To check, create a variable to save the value returned by the function.
				- Then log the variable in the console.
						- You can also invoke the function in the console to view the returned value of the function.
								- Note: This is optional.

*/

// 1. Create a function called greet
function greet(name) {
	return "Hello " + name;
}

let greeting = greet("Zuitt");
console.log(greeting);

// 2. Create a function called printMessage
function printMessage(message) {
	return message;
}

let message1 = printMessage("First Message");
console.log(message1);

let message2 = printMessage("Second Message");
console.log(message2);

let message3 = printMessage("Third Message");
console.log(message3);

// 3. Create a function called getSquare
function getSquare(num) {
	return num * num;
}

let square1 = getSquare(2);
console.log(square1);

// 4. Create a function called double
function double(num) {
	return num * 2;
}

let doubled1 = double(2);
console.log(doubled1);

// 5. Create a function called addTen
function addTen(num) {
	return num + 10;
}

let added10 = addTen(2);
console.log(added10);

// 6. Create a function called printLine
function printLine(line) {
	return "You entered: " + line;
}

let lineToPrint = printLine("Functions are great!");
console.log(lineToPrint);
