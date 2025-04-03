// console.log("hello world!");
const txtFirstName = document.querySelector("#txt-first-name");
const txtLastName = document.querySelector("#txt-last-name");
const spanFullName = document.querySelector("#span-full-name");

txtFirstName.addEventListener("keyup", updateSpanFullName);
txtLastName.addEventListener("keyup", updateSpanFullName);
function updateSpanFullName(event) {
  let firstName = txtFirstName.value;
  let lastName = txtLastName.value;

  if (event.target === txtFirstName) {
    spanFullName.textContent = `${firstName} ${lastName}`;
  } else if (event.target === txtLastName) {
    spanFullName.textContent = `${firstName} ${lastName}`;
  }
}

const txtEmail = document.querySelector("#txt-email");
const txtMobileNumber = document.querySelector("#txt-mobile-number");
const spanEmail = document.querySelector("#span-email");
const spanMobileNumber = document.querySelector("#span-mobile-number");
const spanIntroduction = document.querySelector("#span-introduction");

txtEmail.addEventListener("keyup", (event) => {
  spanEmail.textContent = event.target.value;
});

txtMobileNumber.addEventListener("keyup", (event) => {
  let mobileNum = event.target.value;

  if (mobileNum.length < 11 || !mobileNum.startsWith("0")) {
    spanMobileNumber.textContent = "Invalid mobile number!";
    spanMobileNumber.style.color = "red";
  } else if (mobileNum.length >= 11) {
    txtMobileNumber.setAttribute("maxLength", 11);
    spanMobileNumber.textContent = mobileNum;
    spanMobileNumber.style.color = "black";
  }
});

document.addEventListener("keyup", (event) => {
  let firstName = txtFirstName.value;
  let lastName = txtLastName.value;
  let mobileNumber = txtMobileNumber.value;

  if (firstName && lastName && mobileNumber) {
    spanIntroduction.textContent = `Hello, I am ${firstName} ${lastName}, you can contact me on this number ${mobileNumber}`;
  }
});
