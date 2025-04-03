// console.log("Hello world");

// [SECTION] Iteration Methods
// are loops designed to perform repetitive tasks on arrays
// loops over all items/index in an array

// forEach()
// Similar to a for loop that iterates on each array element
// forEach() does not return anything
let allTasks = [
  "drink html",
  "eat javascript",
  "inhale css",
  "breathe sass",
  "get git",
  "be node",
];

allTasks.forEach(function (task) {
  console.log(task);
});

// filter tasks with length greater than 10 characters

let filteredTasks = [];

allTasks.forEach(function (task) {
  if (task.length > 10) {
    console.log(task);

    filteredTasks.push(task);
  }
});

console.log("Result of filteredTasks: ");
console.log(filteredTasks);

// We want to identify all the admin accounts from users array.

let users = [
  {
    username: "peterSmith",
    isAdmin: false,
  },
  {
    username: "andrewJones99",
    isAdmin: true,
  },
  {
    username: "alexMartin",
    isAdmin: false,
  },
  {
    username: "smithyS",
    isAdmin: true,
  },
];

let adminList = [];

users.forEach((user) => {
  console.log(user);

  if (user.isAdmin === true) {
    adminList.push(user.username);
  }
});

console.log(adminList);
console.log(users);

// map()
// Iterates on each element AND returns a new array with different values depending on the result of the function's operation.

let numbers = [1, 2, 3, 4, 5];
let numberMap = numbers.map((number) => number * number);
console.log("Original Array:");
console.log(numbers);
console.log("Result of map method:");
console.log(numberMap);

// map() vs forEach()

let numberForEach = numbers.forEach((number) => number * number);
console.log("Result of forEach method: ");
console.log(numberForEach); 

/* every()
    - checks if all elements in an array meet the given condition 
    - returns a boolean value. if all elements meet the condition it returns true
*/

let grades = [89, 85, 89, 90, 74];

let allPassingGrade = grades.every(function (grade) {
  console.log(grade);
  return grade >= 75;
});

console.log("Result of every method: " + allPassingGrade);

/* filter()
    - returns a new array that contains each element that meets the given condition.
    - returns an empty array if no element were found
*/

// let filterValid = numbers.filter((number) => number < 3);
// console.log("Result of filter method: " + filterValid);

// let nothingFound = numbers.filter((number) => number === 0);
// console.log("Result of filter method (nothing found): " + nothingFound);

let movies = [
  { name: "The Godfather", rating: 5 },
  { name: "Star Wars IV: A New Hope", rating: 4 },
  { name: "Schindler's List", rating: 5 },
];

let fiveStarMovies = movies.filter(function (movie) {
  console.log(movie);

  return movie.rating === 5;
});

console.log(fiveStarMovies);

/*
    Mini Activity (5 mins)
    
    1. Create an array named `students` containing objects with the following properties:
       - name (string)
       - score (number)
       - attendance (boolean) → true if the student attended all sessions, false otherwise
       const students = [
           { name: "Alice", score: 85, attendance: true },
           { name: "Bob", score: 72, attendance: false },
           { name: "Charlie", score: 90, attendance: true },
           { name: "David", score: 60, attendance: true },
           { name: "Eve", score: 78, attendance: false }
       ];
    2. Find students who:
       - Scored at least 80
       - AND attended all sessions (attendance: true)
    3. Return an array of messages in the following format:
       - <student_name> has complete attendance and passed with a score of <score>.
    4. Print the final result.
    5. Take a screenshot of the console output and send it in the chat.
    Expected output:
    [
        "Alice has complete attendance and passed with a score of 85.",
        "Charlie has complete attendance and passed with a score of 90."
    ]
*/

const students = [
  { name: "Alice", score: 85, attendance: true },
  { name: "Bob", score: 72, attendance: false },
  { name: "Charlie", score: 90, attendance: true },
  { name: "David", score: 60, attendance: true },
  { name: "Eve", score: 78, attendance: false },
];

let passingStudents = students.filter(function (student) {
  return student.score >= 80 && student.attendance;
});

let passingMessages = passingStudents.map(function (student) {
  return `${student.name} has complete attendance and passed with a score of ${student.score}.`;
});

console.log(passingMessages);
