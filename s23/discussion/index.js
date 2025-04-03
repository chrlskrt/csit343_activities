/*

    Mini Activity #1 (5 mins)

    1. Create an array named numbers containing 5 random between 1 and 20.

    2. Print the original numbers array before transformation.

    3.Use an array iteration method to transform each number based on the following rules:

        - If the number is even, raise it to the power of its index.

        - If the number is odd, raise it to the power of (index + 1).

    4. Store the transformed values in a new array named transformedNum and print the final result.

    5. Take a screenshot of the console output and send it in the chat.
 
    Expected output:

    Random numbers:

    [2, 19, 13, 4, 5]
 
    Transformed numbers:

    [1, 361, 2197, 64, 3125]

*/

let numbers = [2, 9, 3, 4, 15];
console.log("Random numbers: ");
console.log(numbers);

let transformedNum = numbers.map((number, index) => {
  return number % 2 === 0 ? number ** index : number ** (index + 1);
});

console.log("Transformed numbers: ");
console.log(transformedNum);

// [SECTION] Template Literals
// allows us to write string without using the concatenation operator (+)

let name = "Tolits";

// Pre-Template literal string
// single or double quotes
let message = "Hello " + name + "!Welcome to programming!";
console.log("message without template literals: " + message);

// Strings using template literals
// uses backticks (``)

message = `hello ${name}! Welcome to programming!`;
console.log(`message with template literals: ${message}`);

// multi-line
const anothermsg = `
  ${name} attebded a math competition.
  He won it by solving the problem 8 raise to 2 with the solution of 64.`;

console.log(anothermsg);

/*

    Mini Activity #2 (5 mins)

    1. Create an array named students containing three objects. 

       Each object should have the following properties: 

       - name (string)

       - age (number)

       - hobby (string)
 
    2. Use an iteration method to generate a multi-line introduction for each student using template literals.
 
    3. Print each multi-line introduction separately in the browser console.
 
    4. Take a screenshot of the console output and send it in the chat.
 
    Expected Output:

    Array of student objects:

    [

        { name: "Alice", age: 22, hobby: "painting" },

        { name: "Bob", age: 24, hobby: "gaming" },

        { name: "Charlie", age: 20, hobby: "reading" }

    ]
 
    Multi-line introduction:

    "Alice is 22 years old.

    They enjoy painting."
 
    "Bob is 24 years old.

    They enjoy gaming."
 
    "Charlie is 20 years old.

    They enjoy reading."

*/

let students = [
  { name: "Alice", age: 22, hobby: "painting" },
  { name: "Bob", age: 24, hobby: "gaming" },
  { name: "Charlie", age: 20, hobby: "reading" },
];

console.log("Array of student objects: ");
console.log(students);

console.log("Multi-line introduction:");

const introductions = students.map(
  (student) =>
    `${student.name} is ${student.age} years old.
  They enjoy ${student.hobby}.`
);

introductions.forEach((intro) => console.log(`"${intro}"`));

// [SECTION] Array destructuring
// allow us to name array elements with variables instead of using index numbers

// const fullName = ["Juan", "Dela", "Cruz"];

// // pre-array destructuring
// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(fullName[2]);

// console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`);

// // array destructuring
// const [firstName, middleName, lastName] = fullName;
// console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

// object destructuring - shortens the syntax for accessing properties from objects
let person = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
};

// pre-object destructuring
console.log(person.firstName);
console.log(person.middleName);
console.log(person.lastName);

console.log(
  `Hello ${person.firstName} ${person.middleName} ${person.lastName}! It's good to see you again.`
);

let { firstName, middleName, lastName } = person;
console.log(firstName);
console.log(middleName);
console.log(lastName);

// destructure in the function parameter
function getFullName({ firstName, middleName, lastName }) {
  console.log(`Hello ${firstName} ${middleName} ${lastName}!`);
}

getFullName(person);

/*
    Mini Activity #3 (10 mins)
    1. Create an object named employee with the following properties:
        - fullName (John Doe)
        - department (Software Engineering)
        - projects (array of project objects, each with title and duration in months)
            - title: "Inventory System", duration: 6 
            - title: "Mobile Food Delivery App", duration: 8
            - title: "E-commerce Website", duration: 12
        - skills ("JavaScript", "UI/UX", "AWS Cloud Computing")
    2. Destructure the following values from the employee object:
        - Extract fullName and department directly.
        - Extract the first project’s title and duration.
        - Extract only the last skill from skills using array destructuring.
    3. Swap the first and last project in the projects array using destructuring.
    4. Print the extracted values and the updated projects array to the console.
    // Expected Output
    Employee Name: John Doe
    Department: Software Engineering
    First Project: Inventory System (6 months)
    Last Skill: AWS Cloud Computing
    Updated Projects Array:
    [
    { title: "E-commerce Website", duration: 12 },
    { title: "Mobile Food Delivery App", duration: 8 },
    { title: "Inventory System", duration: 6 }
    ]
*/

let employee = {
  fullName: "John Doe",
  department: "Software Engineering",
  projects: [
    { title: "Inventory System", duration: 6 },
    { title: "Mobile Food Delivery App", duration: 8 },
    { title: "E-commerce Website", duration: 12 },
  ],
  skills: ["JavaScript", "UI/UX", "AWS Cloud Computing"],
};

const { fullName, department } = employee;

let { title: firstProjectTitle, duration: firstProjectDuration } =
  employee.projects[0];

let [, , lastSkill] = employee.skills;

let [firstProject, , lastProject] = employee.projects;

[employee.projects[0], employee.projects[2]] = [
  employee.projects[2],
  employee.projects[0],
];

console.log("Employee Name: " + fullName);
console.log("Department: " + department);
console.log(
  `First Project: ${firstProjectTitle} (${firstProjectDuration} months)`
);
console.log("Last Skill: " + lastSkill);
console.log("Updated Projects Array: ");
console.log(employee.projects);
