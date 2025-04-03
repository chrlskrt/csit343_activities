// console.log("hello world!");

const txtFirstName = document.querySelector("#txt-first-name");
const txtLastName = document.querySelector("#txt-last-name");
const spanFullName = document.querySelector("#span-full-name");

/* [SECTION] EVENT LISTENER
   - event - an action initiated by the a user upon interacting in a webpage
           - click, hover, page load, keypress
           - a large part of creating ineractivity in a webpage
 */

// two arguments for addEventListener: string (identifies the event), function to be executed
txtFirstName.addEventListener("keyup", (event) => {
  spanFullName.innerHTML = txtFirstName.value;
});

// event - contains information on the triggered event
txtFirstName.addEventListener("keyup", (event) => {
  // element where the event occurred
  console.log(event.target);

  // gets the value of the event target element
  console.log(event.target.value);
});

/*
    Mini Activity (10 mins)
    1. Create a text area where users can type a message.
    2. Display a character count below the text area.
    3. Disable typing beyond 100 characters.
    4. If the user reaches 100 characters, the counter turns red and displays:
    "Characters: 100 / 100 (Character limit reached!)"
    5. If the user stays within the limit, the counter remains normal.
    6. Take a screenshot of your browser and send it in the chat.
*/

let textInputArea = document.getElementById("text-input");
let counterText = document.getElementById("char-count");

textInputArea.addEventListener("keyup", () => {
  let charCount = textInputArea.value.length;

  if (charCount >= 100) {
    counterText.textContent =
      "Characters: 100 / 100 (Character limit reached!)";
    counterText.style.color = "red";
  } else {
    counterText.textContent = `Characters: ${charCount} / 100`;
  }
});
