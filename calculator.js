let add = function (a, b) {
  return a + b;
};
let subtract = function (a, b) {
  return a - b;
};
let multiply = function (a, b) {
  return a * b;
};
let divide = function (a, b) {
  return a / b;
};
let remainder = function (a, b) {
  return a % b;
};

let firstNumber = "";
let operation = "";
let secondNumber = "";
let value = "";

const operate = function (num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "X") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "%") {
    return remainder(num1, num2);
  }
};

let display = document.querySelector("#display");
let display1 = document.querySelector("#display1");
let display2 = document.querySelector("#display2");
let numberButtons = document.querySelectorAll(".number");
let commaButton = document.querySelector("#comma"); // Reference to the comma button
display2.innerHTML = "";

// Function to convert numbers with comma to numbers with a period for calculation

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", function () {
    if (operated === true) {
      display1.innerHTML = "";
      operated = false;
    }
    if (operation === "" && value === "" && display2.innerHTML === "0") {
      firstNumber += numberButton.innerText;
      display2.innerHTML = numberButton.innerText;
    } else if (
      firstNumber !== "" &&
      operation != "" &&
      display2.innerHTML === "0"
    ) {
      secondNumber += numberButton.innerText;
      display2.innerHTML = numberButton.innerText;
    } else if (operation === "" && value === "") {
      firstNumber += numberButton.innerText;
      display2.innerHTML += numberButton.innerText;
    } else if (firstNumber !== "" && operation != "") {
      secondNumber += numberButton.innerText;
      display2.innerHTML += numberButton.innerText;
    }
  });
});

// Event listener for the comma button
commaButton.addEventListener("click", function () {
  if (operation === "" && !firstNumber.includes(".") && firstNumber != "") {
    firstNumber += ".";
    display2.innerHTML += ".";
  } else if (
    operation !== "" &&
    !secondNumber.includes(".") &&
    secondNumber != ""
  ) {
    secondNumber += ".";
    display2.innerHTML += ".";
  }
});

let clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  display.innerHTML = "";
  display2.innerHTML = "";
  display1.innerHTML = "";
  display.append(display1);
  display.append(display2);
  firstNumber = "";
  operation = "";
  secondNumber = "";
  value = "";
});

let operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((operationButtons) => {
  operationButtons.addEventListener("click", function () {
    if (
      firstNumber !== "" &&
      secondNumber === "" &&
      operation === "" &&
      value === ""
    ) {
      operation = operationButtons.innerText;
      display2.innerHTML += " " + operationButtons.innerText + " ";
    }

    if (firstNumber !== "" && operation != "" && secondNumber !== "") {
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);
      value = operate(firstNumber, secondNumber, operation);
      display1.innerHTML += display2.innerHTML;
      display2.innerHTML = "0";
      firstNumber = value.toString();
      console.log(firstNumber);
      operation = operationButtons.innerText;
      secondNumber = "0";
      display1.innerHTML += " " + operationButtons.innerText + " ";
    }
  });
});
let operated = false;
let equal = document.querySelector("#eaqual");
equal.addEventListener("click", function () {
  if (secondNumber === "") {
  } else {
    if (
      (firstNumber != "" && secondNumber != "") ||
      (firstNumber === 0 && secondNumber != "") ||
      (firstNumber != "" && secondNumber === 0) ||
      (firstNumber === 0 && secondNumber === 0)
    ) {
      display1.innerHTML =
        firstNumber + " " + operation + " " + secondNumber + " =";
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);
      display2.innerHTML = operate(firstNumber, secondNumber, operation);
      firstNumber = display2.innerHTML;
      operation = "";
      secondNumber = "";
      value = "";
      operated = true;
    }
  }
});

let deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", function () {
  display1.innerHTML = ""; // Clear display1

  if (display2.innerHTML !== "" && firstNumber === "") {
    display2.innerHTML = display2.innerHTML.slice(0, -1);
    return;
  }

  if (secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1);
    display2.innerHTML = display2.innerHTML.slice(0, -1);
  } else if (operation !== "") {
    operation = "";
    display2.innerHTML = display2.innerHTML.slice(0, -3); // Adjust based on how you display operations
  } else if (firstNumber !== "") {
    firstNumber = firstNumber.slice(0, -1);
    display2.innerHTML = display2.innerHTML.slice(0, -1);
  }
});
let minus = document.querySelector("#minus");
minus.addEventListener("click", function () {
  if (firstNumber !== "" && secondNumber === "" && operation === "") {
    // Remove the current firstNumber from the display
    display2.innerHTML = display2.innerHTML.slice(
      0,
      -firstNumber.toString().length
    );

    firstNumber = firstNumber * -1;

    display2.innerHTML += firstNumber;
  } else if (secondNumber !== "") {
    display2.innerHTML = display2.innerHTML.slice(
      0,
      -secondNumber.toString().length
    );

    secondNumber = secondNumber * -1;

    display2.innerHTML += secondNumber;
  }
});
