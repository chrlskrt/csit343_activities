document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#txt-email");
  const passInput = document.querySelector("#txt-password");
  const errEmailText = document.querySelector("#txt-email-err");
  const errPassText = document.querySelector("#txt-password-err");
  let accessKey;

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

  const btnSubmit = document.querySelector("#btn-log-submit");
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

  loginForm.addEventListener("reset", () => {
    errEmailText.innerHTML = "";
    errPassText.innerHTML = "";
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
        loginForm.reset();
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
});
