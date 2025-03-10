// console.log("Hello World");

/*
    1. In the s21 folder, create an activity folder, an index.html file inside of it and link the index.js file.
    2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
    3. Copy the activity code and instructions from your Instructor into your index.js.
*/

/*

4. Create an object for a Library User Card with properties such as: 
    - userId => A string
    - name => A string
    - age => A number 
    - address => A string
    - isActive => A boolean
    - borrowedBooks => An empty array to store titles of books borrowed.
*/

let userCard = {
  userId: "2024-200-A",
  name: "Hunter Helmsley",
  age: 18,
  address: "Louisville, Kentucky",
  isActive: true,
  borrowedBooks: ["History of Pro Wrestling", "Bodybuilding 101", "1998"],
};

console.log("userCard");
console.log(userCard);

/*

5. Update the given object for a Library Book Card with properties such as: 
    - bookId => A string
    - title => A string
    - description => A string
    - author => A string 
    - yearPublished => A string
    - isAvailable => A boolean
*/

let bookCard = {
  bookId: "2010-100-B",
  title: "History of Pro Wrestling",
  description: "A short history of the Pro Wrestling around the world.",
  author: "Philip Brooks",
  yearPublished: "2010",
  isAvailable: true,
  datesBorrowed: ["11-11-2021", "12-20-2021", "1-1-2023", "12-19-2024"],
};

console.log("bookCard");
console.log(bookCard);

/*
    6. Simulate a scenario where bookCard was borrowed 3 more times.
        - Update the bookCard by adding dates into the bookCard's datesBorrowed array.
        - Use array methods. Don't modify the original array.
*/

bookCard.datesBorrowed.push("1-1-2025", "1-5-2025", "2-1-2025");

console.log("bookCard's datesBorrowed array after adding 3 more dates:");
console.log(bookCard.datesBorrowed);
