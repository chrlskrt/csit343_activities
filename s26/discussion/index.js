// console.log("Hello World");

// [SECTION] DOM
// Access or modify the properties of an element in a webpage.

// [SECTION] Using DOM
// Retrieve an element from the webpage

// query selector
const welcomeTxt = document.querySelector("#welcome");
console.log(welcomeTxt);

// getElementById
const welcomeText = document.getElementById("welcome");
console.log(welcomeText);

const redButton = document.querySelector("#redBtn");
const blkButton = document.querySelector("#blkBtn");

// querySelector vs getElementsBy(ById, ByClassName, etc)
// Returns: querySelector - first matching element while getElementsBy - live collection (HTML Collection) of all matching elements.
// SelectorType: querySelector - CSS Selectors (.class, #id, tag) while getElementsBy - Uses specific element names (id, tag, class)
// Use Case: querySelector - single specific element while getElementsBy - multiple elements.
// Peformance: querySelector - Slower for mulltiple elements while getElementBy - faster for retrieving multiple elements.

// [SECTION] DOM Object Properties
// .innerHTML property contains the text content of an element as well as the tags of other elements inside the element.

welcomeTxt.innerHTML = "I am Angelito Quiambao";

// .style property actually contains the elements visual properties.
welcomeTxt.style.color = "Red";

welcomeTxt.style.color = "Green";

welcomeTxt.style.fontSize = "80px";

function changeColorToRed() {
  welcomeTxt.style.color = "Red";
}

function changeColorToDefault() {
  welcomeTxt.style.color = "Black";
}

// [SECTION] Event Listeners
// Whenever a user interacts with a web page, this action is considered as an event.
// click, hover, page load, or keypress

redButton.addEventListener("click", changeColorToRed);
blkButton.addEventListener("click", changeColorToDefault);

/*
    Mini Activity (5 mins) until 1:58 pm

    1. Add 2 new buttons to the HTML with text as "Change to Blue" and "Change to Green".
        -Add appropriate ids to both elements as identifiers
    2.In the JS, select the buttons using querySelector()
    3. Attach a click event using addEventListener() where upon clicking:
        -Change to Blue button should change the color of the text to blue.
        -Change to Green button should change the color of the text to green.
    4. Take a screenshot of your browser and send it in the chat.
*/

const blueButton = document.querySelector("#blueBtn");
const grnButton = document.querySelector("#grnBtn");

function changeColorToBlue() {
  welcomeTxt.style.color = "Blue";
}

function changeColorToGreen() {
  welcomeTxt.style.color = "Green";
}

blueButton.addEventListener("click", changeColorToBlue);
grnButton.addEventListener("click", changeColorToGreen);
