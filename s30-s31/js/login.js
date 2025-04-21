const emailInput = document.querySelector("#txt-email");
const passInput = document.querySelector("#txt-password");
const errEmailText = document.querySelector("#txt-email-err");
const errPassText = document.querySelector("#txt-password-err");
let accessKey;

emailInput.addEventListener("keyup", () => {
  let email = emailInput.value;
  if (isEmailOk(email)) {
    errEmailText.innerHTML = "";
  } else {
    errEmailText.innerHTML = "Enter a valid email address.";
  }
});

passInput.addEventListener("keyup", () => {
  let pass = passInput.value;
  if (!isPassOk(pass)) {
    errPassText.innerHTML = "Password must be at least 8 characters.";
  } else {
    errPassText.innerHTML = "";
  }
});

const btnReset = document.querySelector("#btn-log-reset");
const btnSubmit = document.querySelector("#btn-log-submit");

btnReset.addEventListener("click", reset());

const loginForm = document.querySelector("#login-form");

document.addEventListener("keyup", () => {
  email = emailInput.value;
  pass = passInput.value;

  if (isEmailOk(email) && isPassOk(pass)) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("https://movieapp-api-lms1.onrender.com/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: emailInput.value,
      password: passInput.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      console.log(response);

      if (!response.ok) {
        return response.json().then((errorData) => {
          throw new Error(
            errorData.message || "Unexpected error: " + response.status
          );
        });
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      accessKey = data;

      alert("Login Successful!");
      reset();
    })
    .catch(function (error) {
      alert("Login failed: " + error.message);
    });
});

function isEmailOk(email) {
  return email.includes("@");
}

function isPassOk(pass) {
  return pass.length >= 8;
}

function reset() {
  emailInput.value = "";
  passInput.value = "";
  errEmailText.innerHTML = "";
  errPassText.innerHTML = "";
}
