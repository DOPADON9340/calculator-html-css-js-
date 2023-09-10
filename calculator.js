const display = document.getElementById("display");
const displayInputs ="";

function appendToDisplay(input) {
    const input = input;
    display.innerHTML = input;
    displayInputs += input;
}

function deleteDigit() {
    if (displayInput.length > 0) {
        displayInput = displayInput.slice(0, -1);
        display.innerHTML = displayInput;
    }
}
function calculate() {
    let result = 0;
    let currentNumber = "";
    let operator = "+"; 

    for (let index = 0; index < displayInput.length; index++) {
        const char = displayInput[index];

        if (char === "+" || char === "-" || char === "*") {
            if (operator === "+") {
                result += parseFloat(currentNumber);
            } else if (operator === "-") {
                result -= parseFloat(currentNumber);
            } else if (operator === "*") {
                result *= parseFloat(currentNumber);
            }

            operator = char;
            currentNumber = "";
        } else {
            currentNumber += char;
        }
    }

    if (operator === "+") {
        result += parseFloat(currentNumber);
    } else if (operator === "-") {
        result -= parseFloat(currentNumber);
    } else if (operator === "*") {
        result *= parseFloat(currentNumber);
    }
    
    display.innerHTML = result.toString();
    displayInput = result.toString();
}