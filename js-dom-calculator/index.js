const txtFirstNum = document.querySelector("#txt-first-number");
const txtSecondNum = document.querySelector("#txt-second-number");
const btnOp = document.querySelectorAll(".btn-operator");
const txtResult = document.querySelector("#result");

const btnMem = document.querySelectorAll(".btn-mem-op");

const historyList = document.querySelector("#historyList");
const calculationHistory = [];

const btnClear = document.querySelector("#btn-clear");

let result;
let memory = null;

document.addEventListener("keyup", (event) => {
  let key = event.key;
  let opKeys = "+*-/";
  let firstNum = txtFirstNum.value;
  let secondNum = txtSecondNum.value;
  let isInputOk = firstNum.length > 0 && secondNum.length > 0;

  if (isInputOk) {
    btnOp.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  } else {
    btnOp.forEach((btn) => {
      btn.setAttribute("disabled", "true");
    });
  }

  if (isInputOk && opKeys.includes(key)) {
    switch (key) {
      case "+":
        performOp("add");
        break;
      case "-":
        performOp("sub");
        break;
      case "*":
        performOp("mul");
        break;
      case "/":
        performOp("div");
        break;
    }
  }
});

function performOp(op) {
  // let op = event.target.value;

  let firstNum = Number(txtFirstNum.value);
  let secondNum = Number(txtSecondNum.value);
  switch (op) {
    case "add":
      op = "+";
      result = firstNum + secondNum;
      break;
    case "sub":
      op = "-";
      result = firstNum - secondNum;
      break;
    case "mul":
      op = "×";
      result = firstNum * secondNum;
      break;
    case "div":
      op = "÷";
      if (secondNum === 0) {
        result = "Error: Division by zero";
        break;
      }

      result = firstNum / secondNum;
      break;
  }

  txtResult.innerHTML = `Result: ${result}`;

  calculationHistory.push(`${firstNum} ${op} ${secondNum} = ${result}`);
  displayHistoryArray();
}

function displayHistoryArray() {
  historyList.replaceChildren();
  calculationHistory.forEach((calc) => {
    var li = document.createElement("li");
    li.textContent = calc;
    historyList.appendChild(li);
  });

  if (calculationHistory.length > 0) {
    btnClear.removeAttribute("disabled");
  } else {
    btnClear.setAttribute("disabled", "true");
  }
}

btnOp.forEach((btn) => {
  btn.addEventListener("click", () => performOp(`${btn.value}`));
});

btnClear.addEventListener("click", () => {
  calculationHistory.length = 0;
  displayHistoryArray();
});

//-------- Memory
btnMem.forEach((btn) => {
  btn.addEventListener("click", performMemoryTask);
});

function performMemoryTask(event) {
  let memTask = event.target.value;

  switch (memTask) {
    case "m+":
      if (typeof result !== "number") {
        result = null;
        alert("No result yet.");
      } else {
        memory = result;
        result = null;
        alert(`Stored in memory: ${result}`);
      }

      break;
    case "mr":
      if (memory === null) {
        alert("Memory is empty!");
      } else {
        txtFirstNum.value = memory;
      }

      break;
    case "mc":
      memory = null;
      alert("Memory is cleared.");
      break;
  }
}
