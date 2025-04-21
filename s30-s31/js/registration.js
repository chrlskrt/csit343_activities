const emailInput = document.querySelector("#txt-email");
const passInput = document.querySelector("#txt-password");
const cpassInput = document.querySelector("#txt-confirm-password");
const errEmailText = document.querySelector("#txt-email-err");
const errPassText = document.querySelector("#txt-password-err");
const errCPassText = document.querySelector("#txt-conf-password-err");

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

cpassInput.addEventListener("keyup", () => {
  let pass = passInput.value;
  let cpass = cpassInput.value;

  if (pass !== cpass) {
    errCPassText.innerHTML = "Password must match.";
  } else {
    errCPassText.innerHTML = "";
  }
});

const btnReset = document.querySelector("#btn-reg-reset");
const btnSubmit = document.querySelector("#btn-reg-submit");

btnReset.addEventListener("click", reset());

const regForm = document.querySelector("#registration-form");

document.addEventListener("keyup", () => {
  email = emailInput.value;
  pass = passInput.value;
  cpass = cpassInput.value;

  if (isEmailOk(email) && isPassOk(pass) && pass === cpass) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

regForm.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("https://movieapp-api-lms1.onrender.com/users/register", {
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

      alert("Registration Successful!");
      reset();
    })
    .catch(function (error) {
      alert("Registration failed: " + error.message);
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
  cpassInput.value = "";
  errEmailText.innerHTML = "";
  errPassText.innerHTML = "";
  errCPassText.innerHTML = "";
}
