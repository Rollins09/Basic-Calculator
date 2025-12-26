const display = document.getElementById("display");
let memory = 0;

/* Append value */
function appendValue(value) {
    display.value += value;
}

/* Clear display */
function clearDisplay() {
    display.value = "";
}

/* Delete last character */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/* Calculate result */
function calculateResult() {
    try {
        if (display.value === "") return;

        let result = eval(display.value);

        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Invalid Input";
    }
}

/* Percentage calculation */
function calculatePercentage() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "Invalid Input";
    }
}

/* Square root calculation */
function calculateSquareRoot() {
    try {
        let value = eval(display.value);
        if (value < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(value);
        }
    } catch {
        display.value = "Invalid Input";
    }
}

function memoryAdd() {
    try {
        memory += eval(display.value) || 0;
    } catch {
        display.value = "Invalid Input";
    }
}

function memorySubtract() {
    try {
        memory -= eval(display.value) || 0;
    } catch {
        display.value = "Invalid Input";
    }
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}


/* Keyboard Support */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});