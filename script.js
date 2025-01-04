"use strict";
function performOperation(operation) {
    // Prompt the user for the first number
    const num1Input = prompt("Enter the first number:");
    if (!num1Input || isNaN(parseFloat(num1Input))) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }
    const num1 = parseFloat(num1Input);
    // Prompt the user for the second number
    const num2Input = prompt("Enter the second number:");
    if (!num2Input || isNaN(parseFloat(num2Input))) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }
    const num2 = parseFloat(num2Input);
    let result;
    // Perform the chosen operation
    switch (operation) {
        case "add":
            result = num1 + num2;
            alert(`The result of addition is: ${result}`);
            break;
        case "subtract":
            result = num1 - num2;
            alert(`The result of subtraction is: ${result}`);
            break;
        case "multiply":
            result = num1 * num2;
            alert(`The result of multiplication is: ${result}`);
            break;
        case "divide":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
            }
            else {
                result = num1 / num2;
                alert(`The result of division is: ${result}`);
            }
            break;
        default:
            alert("Invalid operation.");
            break;
    }
}
