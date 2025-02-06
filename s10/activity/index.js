/*
		
		1. Create a function called addNum which will be able to add two numbers.
				- Numbers must be provided as arguments.
				- Return the result of the addition.
			 
		2. Create a function called subNum which will be able to subtract two numbers.
				- Numbers must be provided as arguments.
				- Return the result of subtraction.

		3. Create a function called multiplyNum which will be able to multiply two numbers.
				- Numbers must be provided as arguments.
				- Return the result of the multiplication.

		4. Create a function divideNum which will be able to divide two numbers.
				- Numbers must be provided as arguments.
				- Return the result of the division.

		5. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
				- a number should be provided as an argument.
				- look up the formula for calculating the area of a circle with a provided/given radius.
				- look up the use of the exponent operator.
				- return the result of the area calculation.

		6. Create a function called getAverage which will be able to get total average of four numbers.
				- 4 numbers should be provided as an argument.
				- look up the formula for calculating the average of numbers.
				- return the result of the average calculation.
		
		7. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
				- this function should take 2 numbers as an argument, your score and the total score.
				- First, get the percentage of your score against the total. You can look up the formula to get percentage.
				- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
				- return the value of the variable isPassed.
				- This function should return a boolean.
*/

/* 
		8. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
				- Check syntax of the following code.
				- Check if value is returned.
				- Check the parameters and arguments
*/

// 1. Create a function called addNum which will be able to add two numbers.
function addNum(a, b) {
  return a + b;
}

console.log("addNum(15, 5)");
console.log(addNum(15, 5));

// 2. Create a function called subNum which will be able to subtract two numbers.
function subNum(a, b) {
  return a - b;
}

console.log("subNum(25, 10)");
console.log(subNum(25, 10));

// 3. Create a function called multiplyNum which will be able to multiply two numbers.
function multiplyNum(a, b) {
  return a * b;
}

console.log("multiplyNum(30, 4)");
console.log(multiplyNum(30, 4));

// 4. Create a function divideNum which will be able to divide two numbers.
function divideNum(a, b) {
  return a / b;
}

console.log("divideNum(120, 2)");
console.log(divideNum(120, 2));

// 5. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
function getCircleArea(radius) {
  return 3.1416 * radius ** 2;
}

console.log("getCircleArea(16)");
console.log(getCircleArea(16));

// 6. Create a function called getAverage which will be able to get total average of four numbers.
function getAverage(a, b, c, d) {
  return (a + b + c + d) / 4;
}

console.log("getAverage(81, 79, 89, 85)");
console.log(getAverage(81, 79, 89, 85));

// 7. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
function checkIfPassed(score, totalScore) {
  let percentage = (score / totalScore) * 100;
  let isPassed = percentage > 75;
  return isPassed;
}

console.log("checkIfPassed(8, 10)");
console.log(checkIfPassed(8, 10));

function register(firstName, lastName, email, password, mobileNum) {
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    mobileNum: mobileNum,
  };
}

let newUser = register(
  "Lilo",
  "Pelekai",
  "lilostitch@gmail.com",
  "liloohana1234",
  "09276612409"
);
console.log(newUser);

function createProduct(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,
  };
}

let newProduct = createProduct("Chocolate Bar", 200, 50, true);
console.log(newProduct);

function createTeamArr(member1, member2, member3, member4, member5) {
  let members = [member1, member2, member3, member4, member5];
  return members;
}

let newTeam = createTeamArr(
  "Eugene",
  "Dennis",
  "Alfred",
  "Vincent",
  "Jeremiah"
);
console.log(newTeam);
