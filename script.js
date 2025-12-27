// Gets the calculator display input element using its ID
const display = document.getElementById("display");

// Variable to store memory value for M+, M-, MR, MC
let memory = 0;

/* Append value */
// Function to add numbers or operators to the display
function appendValue(value) {
    display.value += value; // Adds the clicked value to the existing display content
}

/* Clear display */
// Function to clear the entire display
function clearDisplay() {
    display.value = ""; // Sets display to empty
}

/* Delete last character */
// Function to remove the last entered character
function deleteLast() {
    display.value = display.value.slice(0, -1); // Removes last character from string
}

/* Calculate result */
// Function to evaluate the expression and show result
function calculateResult() {
    try {
        // If display is empty, do nothing
        if (display.value === "") return;

        // Evaluates the mathematical expression
        let result = eval(display.value);

        // Checks for division by zero errors
        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result; // Displays the calculated result
        }
    } catch {
        // Displays error if expression is invalid
        display.value = "Invalid Input";
    }
}

/* Percentage calculation */
// Function to convert number into percentage
function calculatePercentage() {
    try {
        // If display is empty, do nothing
        if (display.value === "") return;

        // Divides the evaluated value by 100
        display.value = eval(display.value) / 100;
    } catch {
        // Error handling for invalid expressions
        display.value = "Invalid Input";
    }
}

/* Square root calculation */
// Function to calculate square root of the value
function calculateSquareRoot() {
    try {
        // Evaluates the display value
        let value = eval(display.value);

        // Square root of negative numbers is not allowed
        if (value < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(value); // Calculates square root
        }
    } catch {
        // Error handling
        display.value = "Invalid Input";
    }
}

/* Memory Add (M+) */
// Adds current display value to memory
function memoryAdd() {
    try {
        memory += eval(display.value) || 0; // Adds value or 0 if empty
    } catch {
        display.value = "Invalid Input";
    }
}

/* Memory Subtract (M-) */
// Subtracts current display value from memory
function memorySubtract() {
    try {
        memory -= eval(display.value) || 0; // Subtracts value or 0 if empty
    } catch {
        display.value = "Invalid Input";
    }
}

/* Memory Recall (MR) */
// Displays stored memory value
function memoryRecall() {
    display.value = memory;
}

/* Memory Clear (MC) */
// Clears memory value
function memoryClear() {
    memory = 0;
}

/* Keyboard Support */
// Adds keyboard input support for calculator
document.addEventListener("keydown", function (event) {
    const key = event.key; // Stores the pressed key

    // Allows numbers and operators
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    }
    // Calculates result when Enter key is pressed
    else if (key === "Enter") {
        calculateResult();
    }
    // Deletes last character when Backspace is pressed
    else if (key === "Backspace") {
        deleteLast();
    }
    // Clears display when 'C' or 'c' is pressed
    else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});
