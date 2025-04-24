document.addEventListener("DOMContentLoaded", () => {
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
      emailInput.classList.remove("input-err");
    } else {
      errEmailText.innerHTML = "Enter a valid email address.";
      emailInput.classList.add("input-err");
    }
  });

  passInput.addEventListener("keyup", () => {
    let pass = passInput.value;
    if (!isPassOk(pass)) {
      errPassText.innerHTML = "Password must be at least 8 characters.";
      passInput.classList.add("input-err");
    } else {
      errPassText.innerHTML = "";
      passInput.classList.remove("input-err");
    }
  });

  cpassInput.addEventListener("keyup", () => {
    let pass = passInput.value;
    let cpass = cpassInput.value;

    if (!isPassOk(pass) && pass !== cpass) {
      errCPassText.innerHTML = "Password must match.";
      cpassInput.classList.add("input-err");
    } else {
      errCPassText.innerHTML = "";
      cpassInput.classList.remove("input-err");
    }
  });

  const btnSubmit = document.querySelector("#btn-reg-submit");
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

  regForm.addEventListener("reset", () => {
    errEmailText.innerHTML = "";
    errPassText.innerHTML = "";
    errCPassText.innerHTML = "";
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
        regForm.reset();
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
});
