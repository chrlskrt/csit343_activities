// console.log("S22 Discussion")

/*
    Objects Recall:
    
    1. Create objects using objects literal:
        Syntax:
            let objectA = {
                keyA: valueA,
                keyB: valueB
            }
    
    2. Creating objects using a constructor function
        - Useful when we need to create several objects with different values but same properties

        Syntax:
            function ObjectName(keyA, keyB) {
                this.KeyA = keyA;
                this.KeyB = keyB;
            }
*/

function Laptop(name, manufactureDate) {
  this.name = name;
  this.manufactureDate = manufactureDate;
}

let laptop = new Laptop("Lenovo", 2008);
console.log(laptop);

/*
    Mini Activity:
        Create another instance of the laptop Object.
        Use myLaptop as the object name. name = MacBook Air, 
        manufactureDate = 2020;

*/

let myLaptop = new Laptop("MacBook Air", 2020);
console.log(myLaptop);

// no new keyword
// returns "undefined" without the "new" operator because the "Laptop" function does not have a return statement

let oldLaptop = Laptop("Portal R2E CCMC", 1980);
console.log(oldLaptop);

/*
    Object Methods:
          - methods are functions within an object. they can be accessed and invoked from an object
 */

let person = {
  // property/key
  name: "John",

  // method
  talk: function () {
    console.log("Hello! My name is " + this.name);
  },
};

/*
    Mini-Activity
    Create a friend object with the ff properties and method:

    properties:
       firstName
       lastName
       address
    method:
       introduce: "Hello my name <firstname> <lastname>"

    Invoke introduce method
 */

let friend = {
  firstName: "Charlene",
  lastName: "Repuesto",
  address: "Cebu, Philippines",

  introduce: function () {
    console.log("Hello my name is " + this.firstName + " " + this.lastName);
  },
};

console.log(friend);
friend.introduce();

// object methods can also receive arguments much like regular functions

friend.greet = function (object) {
  console.log("Hi " + object.name + "!");
};

friend.greet(person);

// real world application of objects - constructor with methods
function Student(fullName, email, age) {
  // properties
  this.fullName = fullName;
  this.email = email;
  this.age = age;
  this.subjects = [];

  // methods
  this.introduction = function () {
    console.log("Hello! I'm " + this.fullName);
  };

  this.enroll = function (subject) {
    this.subjects.push(subject);
    console.log("Enrolled in " + subject);
  };
}

let student1 = new Student("Joe Smith", "joesmith@gmail.com", 12);
let student2 = new Student("Jeff Doe", "jeffdoe@gmail.com", 13);

console.log(student1);
console.log(student2);
